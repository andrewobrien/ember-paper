import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('paper-radio', 'PaperRadioComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('should set checked css class', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function() {
    component.set('checked', true);
  });

  assert.ok(this.$().hasClass('md-checked'));
});

test('it is possible to check and set selected property to value', function(assert) {
  var component = this.subject();

  assert.ok(!component.get('selected'));

  var value = 'some value';

  Ember.run(function() {
    component.set('value', value);
  });

  this.$().trigger('click');

  assert.equal(component.get('selected'), value);
});

test('it isn\'t possible to uncheck and set selected property to null', function(assert) {
  var component = this.subject();

  var value = 'some value';

  Ember.run(function() {
    component.set('value', value);
    component.set('selected', value);
  });

  this.$().trigger('click');

  //still has value
  assert.equal(component.get('selected'), value);
});

test('it is possible to uncheck and set selected property to null if toggle is true', function(assert) {
  var component = this.subject();

  var value = 'some value';

  Ember.run(function() {
    component.set('value', value);
    component.set('selected', value);
    component.set('toggle', true);
  });

  this.$().trigger('click');

  assert.equal(component.get('selected'), null);
});
