import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleBlogPost() {
      this.toggleProperty('isShowingBlog');
    }
  }
});
