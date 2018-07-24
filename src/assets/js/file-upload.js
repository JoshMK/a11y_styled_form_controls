(function ( w, doc, undefined ) {
	'use strict';
	var A11yFileUpload;

	A11yFileUpload = function ( ) {
		/**
		 * Author: Scott O'Hara
		 * Version: 0.1.0
		 * License: https://github.com/scottaohara/a11y_styled_form_controls/blob/master/LICENSE
		 */
		var el;

		/**
		 * Initialize the instance, run all setup functions
		 * and attach the necessary events.
		 */
		this.init = function ( elm ) {
			el = elm;
			setupPattern( el );
			checkDisabled( el );
			attachEvents( el );
		};

		/**
		 * Setup the instance with n
		 */
		var setupPattern = function ( el ) {
			var label = el.querySelector('.file-up__label');

			var output = doc.createElement('span');
			output.classList.add('file-up__output');
			output.setAttribute('aria-hidden', 'true');

			label.appendChild(output);
		};

		/**
		 * Disable check
		 * If an input is disabled, this pattern won't
		 * dim everything. Set an is-disabled class to
		 * make sure it visually looks disabled.
		 */
		var checkDisabled = function ( el ) {
			if ( el.querySelector('[disabled]') ) {
				el.classList.add('is-disabled');
			}
		}

		/**
		 * Events for toggle buttons
		 * @return none
		 */
		var attachEvents = function ( el ) {
			var input = el.querySelector('[type="file"]');

			input.addEventListener('change', function () {
				if ( this.hasAttribute('multiple') && this.files.length > 1 ) {
					this.parentNode.querySelector('.file-up__output').innerHTML = this.files.length + ' files selected.';
				}
				else {
					this.parentNode.querySelector('.file-up__output').innerHTML = this.value.replace(/(\w+:?[\\\/])/g, '');
				}
			});
		};

		return this;
	}; // A11yFileUpload()

	w.A11yFileUpload = A11yFileUpload;
})( window, document );
