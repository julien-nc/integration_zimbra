/* jshint esversion: 6 */

/**
 * Nextcloud - zimbra
 *
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 * @copyright Julien Veyssier 2022
 */

import Vue from 'vue'
import './bootstrap'
import DashboardEvent from './views/DashboardEvent'

document.addEventListener('DOMContentLoaded', function() {

	OCA.Dashboard.register('zimbra_event', (el, { widget }) => {
		const View = Vue.extend(Dashboard)
		new View({
			propsData: { title: widget.title },
		}).$mount(el)
	})

})
