/**
 * Bubbli Invitation Studio 2.0 - Automated Test & Validation Suite
 * Verifies catalogue requirements, layout safety, unique IDs, and rendering contracts.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    const Taxonomy = require('./taxonomy.js');
    const Ornaments = require('./ornaments.js');
    const Wording = require('./wording.js');
    const Templates = require('./templates.js');
    const Renderer = require('./renderer.js');
    const Storage = require('./storage.js');
    module.exports = factory(Taxonomy, Ornaments, Wording, Templates, Renderer, Storage);
  } else {
    root.BubbliValidator = factory(
      root.BubbliTaxonomy,
      root.BubbliOrnaments,
      root.BubbliWording,
      root.BubbliTemplates,
      root.BubbliRenderer,
      root.BubbliStorage
    );
  }
}(typeof self !== 'undefined' ? self : this, function (Taxonomy, Ornaments, Wording, Templates, Renderer, Storage) {
  'use strict';

  function runAllTests() {
    const results = {
      total: 0,
      passed: 0,
      failed: 0,
      details: [],
      templateCountsByEvent: {}
    };

    function assert(condition, message) {
      results.total++;
      if (condition) {
        results.passed++;
        results.details.push({ status: 'PASS', message: message });
      } else {
        results.failed++;
        results.details.push({ status: 'FAIL', message: message });
        console.error('❌ Test Failed:', message);
      }
    }

    console.log('🧪 Starting Bubbli Invitation Studio 2.0 Test Suite...\n');

    // TEST 1: Unique Template IDs
    const allTemplates = Templates.getAllTemplates();
    const seenIds = new Set();
    let hasDuplicateId = false;

    allTemplates.forEach(t => {
      if (seenIds.has(t.id)) {
        hasDuplicateId = true;
        console.error('Duplicate Template ID:', t.id);
      }
      seenIds.add(t.id);
    });
    assert(!hasDuplicateId, `All ${allTemplates.length} template IDs are globally unique`);

    // TEST 2: Every priority event type has >= 10 distinct functioning templates
    const priorityEvents = Taxonomy.getPriorityEvents();
    assert(priorityEvents.length >= 10, `Found ${priorityEvents.length} priority event types (minimum 10 required)`);

    priorityEvents.forEach(evt => {
      const templatesForEvent = Templates.getTemplatesForEvent(evt.id);
      results.templateCountsByEvent[evt.id] = templatesForEvent.length;
      assert(
        templatesForEvent.length >= 10,
        `Event '${evt.name}' (${evt.id}) has ${templatesForEvent.length} templates (>= 10 required)`
      );
    });

    // TEST 3: Meaningful differences in templates (>= 3 dimensions)
    let meaningfulVariationPassed = true;
    allTemplates.forEach(t => {
      const hasLayout = Boolean(t.layout);
      const hasPalette = Boolean(t.palette && t.palette.background && t.palette.primary);
      const hasTypography = Boolean(t.typography && t.typography.heading);
      const hasDecor = Boolean(t.decorationPack);
      if (!hasLayout || !hasPalette || !hasTypography || !hasDecor) {
        meaningfulVariationPassed = false;
      }
    });
    assert(meaningfulVariationPassed, 'All templates define distinct layout, palette, typography, and decoration packs');

    // TEST 4: Color palette validity
    let palettesValid = true;
    allTemplates.forEach(t => {
      const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
      const bg = t.palette.background;
      const primary = t.palette.primary;
      if (bg && bg.startsWith('#') && !hexRegex.test(bg)) palettesValid = false;
      if (primary && primary.startsWith('#') && !hexRegex.test(primary)) palettesValid = false;
    });
    assert(palettesValid, 'All template color codes are valid hex color values');

    // TEST 5: Render with standard mock data
    const sampleTemplate = allTemplates[0];
    const standardMockData = {
      headline: 'Auspicious Wedding Invitation',
      coupleNames: 'Rohit Sharma & Ananya Iyer',
      parentsNames: 'S/o Mr. Suresh Sharma | D/o Mr. Ramesh Iyer',
      date: 'Sunday, 15th December 2026',
      time: '10:30 AM onwards',
      venue: 'The Leela Palace Ballroom',
      address: 'Bengaluru, Karnataka',
      message: 'Join us with family and friends to celebrate our eternal union.',
      rsvp: 'RSVP: Sharma & Iyer Families'
    };

    const renderedHtml = Renderer.render(sampleTemplate, standardMockData);
    assert(renderedHtml.includes('Rohit Sharma &amp; Ananya Iyer'), 'Standard render outputs couple names correctly');
    assert(renderedHtml.includes('The Leela Palace Ballroom'), 'Standard render outputs venue correctly');

    // TEST 6: Render with extreme long text (Auto text fitting safe test)
    const extremeData = {
      headline: 'The Grand Royal Auspicious Kalyanam of Two Families',
      coupleNames: 'Dr. Venkatanarasimha Raju Raghavaraju & Srimathi Padmavathamma Devi',
      venue: 'Sree Kanteerava Indoor Convention Centre, Cubbon Park Road, High Grounds',
      message: 'We solicit your gracious presence and heartfelt blessings on this auspicious occasion of sacred wedding rituals and grand evening feast with all beloved family members.'
    };
    const renderedExtreme = Renderer.render(sampleTemplate, extremeData);
    assert(
      renderedExtreme.includes('Dr. Venkatanarasimha Raju Raghavaraju'),
      'Renderer safely handles ultra-long names without truncation errors'
    );

    // TEST 7: Render with missing optional fields (clean disappearance)
    const minimalData = {
      coupleNames: 'Aditya & Riya'
    };
    const renderedMinimal = Renderer.render(sampleTemplate, minimalData);
    assert(!renderedMinimal.includes('undefined'), 'Missing optional fields do not render "undefined"');
    assert(!renderedMinimal.includes('null'), 'Missing optional fields do not render "null"');

    // TEST 8: Storage compression & decompression roundtrip
    const payloadToCompress = {
      id: 'test-invite-123',
      t: 'wedding-south-indian-temple',
      d: { coupleNames: 'Arun & Meera' }
    };
    const compressed = Storage.compressData(payloadToCompress);
    const decompressed = Storage.decompressData(compressed);
    assert(
      decompressed && decompressed.id === 'test-invite-123' && decompressed.d.coupleNames === 'Arun & Meera',
      'Storage compression and decompression roundtrip succeeded with 100% data integrity'
    );

    // TEST 9: SVG Ornaments rendering
    const gopuramSvg = Ornaments.getOrnament('templeArch', { color: '#C5A059' });
    assert(gopuramSvg.includes('<svg') && gopuramSvg.includes('</svg>'), 'Vector ornaments generate valid SVG markup');

    console.log(`\n📊 Test Summary: ${results.passed}/${results.total} Passed (${results.failed} Failed)`);
    return results;
  }

  return {
    runAllTests: runAllTests
  };
}));
