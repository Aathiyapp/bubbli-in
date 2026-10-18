/**
 * Bubbli Invitation Studio 2.0 - Privacy-Conscious Analytics & Metrics
 * Client-side event logging with local dashboard data.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BubbliAnalytics = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const ANALYTICS_KEY = 'bubbli_studio_analytics_events';

  const EVENTS = {
    CATEGORY_VIEWED: 'category_viewed',
    TEMPLATE_PREVIEWED: 'template_previewed',
    TEMPLATE_SELECTED: 'template_selected',
    EDITOR_STARTED: 'editor_started',
    INVITATION_PUBLISHED: 'invitation_published',
    INVITATION_SHARED: 'invitation_shared',
    INVITATION_DOWNLOADED: 'invitation_downloaded',
    RSVP_CLICKED: 'rsvp_clicked',
    PUBLIC_INVITE_VIEWED: 'public_invitation_viewed'
  };

  function getEvents() {
    try {
      const raw = localStorage.getItem(ANALYTICS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function track(eventName, metadata = {}) {
    try {
      const events = getEvents();
      // Keep at most 1000 events to respect local storage limits
      if (events.length > 1000) {
        events.splice(0, 200);
      }
      events.push({
        event: eventName,
        metadata: metadata,
        timestamp: Date.now()
      });
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events));
    } catch (err) {
      console.warn('Analytics track failed:', err);
    }
  }

  function getSummary() {
    const events = getEvents();
    const counts = {};
    const popularTemplates = {};
    const popularEvents = {};

    events.forEach(item => {
      counts[item.event] = (counts[item.event] || 0) + 1;
      if (item.metadata && item.metadata.templateId) {
        popularTemplates[item.metadata.templateId] = (popularTemplates[item.metadata.templateId] || 0) + 1;
      }
      if (item.metadata && item.metadata.eventType) {
        popularEvents[item.metadata.eventType] = (popularEvents[item.metadata.eventType] || 0) + 1;
      }
    });

    return {
      totalEvents: events.length,
      counts: counts,
      popularTemplates: popularTemplates,
      popularEvents: popularEvents
    };
  }

  return {
    EVENTS: EVENTS,
    track: track,
    getEvents: getEvents,
    getSummary: getSummary
  };
}));
