import { test } from 'qunit';
import moduleForAcceptance from 'miriam-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | blogs');

test('visiting /blogs', function(assert) {
  visit('/blogs');

  andThen(function() {
    assert.equal(currentURL(), '/blogs');
  });
});

test('should list all blogs', function(assert){
  visit('/blogs');

  andThen(function() {
    assert.equal(find('.post').length, 3, 'should see all posts');
  })
});

