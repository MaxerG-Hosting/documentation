(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{136:function(t,e,o){t.exports=o.p+"assets/img/pterodactyl_add_node_create_button.1a29979f.png"},137:function(t,e,o){t.exports=o.p+"assets/img/pterodactyl_add_node_new_page.f359059a.png"},138:function(t,e,o){t.exports=o.p+"assets/img/pterodactyl_add_node_config.6ae87ba2.png"},167:function(t,e,o){"use strict";o.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"creating-a-new-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a New Node")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#location"}},[this._v("Location")])]),e("li",[e("a",{attrs:{href:"#information-required"}},[this._v("Information Required")])]),e("li",[e("a",{attrs:{href:"#install-the-daemon"}},[this._v("Install the Daemon")])]),e("li",[e("a",{attrs:{href:"#configuring-the-node"}},[this._v("Configuring the Node")]),e("ul",[e("li",[e("a",{attrs:{href:"#auto-deploy"}},[this._v("Auto-Deploy")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location","aria-hidden":"true"}},[this._v("#")]),this._v(" Location")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:o(136),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"information-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#information-required","aria-hidden":"true"}},[this._v("#")]),this._v(" Information Required")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:o(137),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("strong",[t._v("Name")]),t._v(": a quick identifiable name for the daemon")]),t._v(" "),o("li",[o("strong",[t._v("Description")]),t._v(": a long description that is used to help you identify the node.")]),t._v(" "),o("li",[o("strong",[t._v("Location")]),t._v(": the location you have the node in. These are configured in the 'Locations' section of the panel and one\nmust be created before a node can be created. These simply act as categories for Nodes and serve no other purpose at\nthis time.")]),t._v(" "),o("li",[o("strong",[t._v("FQDN")]),t._v(": the fully qualified domain name for the node — for example: "),o("code",[t._v("node.demon.pterodactyl.io")])]),t._v(" "),o("li",[o("strong",[t._v("Communicate over SSL")]),t._v(": if the panel is using SSL the Daemon is required to use SSL as well.")]),t._v(" "),o("li",[o("strong",[t._v("Behind Proxy")]),t._v(": if you have the daemon behind a proxy that terminates SSL connections before arriving at the daemon\nthen this option should be selected. If none of that sentence made sense, this doesn't effect you.")]),t._v(" "),o("li",[o("strong",[t._v("Server File Directory")]),t._v(": the location on the physical server where the daemon is to store the files the servers\ngenerate. By default this is "),o("code",[t._v("/srv/daemon-data")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("OVH Users")]),this._v(" "),e("p",[this._v("Some OVH users regularly have their "),e("code",[this._v("/home")]),this._v(" folder be the largest filesystem. You may want to change to use\n"),e("code",[this._v("/home/daemon-data")]),this._v(" if you are on a default OVH box.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("strong",[t._v("Total Memory")]),t._v(": the total amount of ram the Node should be able to allocate automatically.")]),t._v(" "),o("li",[o("strong",[t._v("Memory Overallocate")]),t._v(": the percentage of ram to over-allocate on a Node. For example, if you have set a 10G memory\nlimit, with a 20% overallocation the Panel will allocate up to 12G of memory on this node in total.")]),t._v(" "),o("li",[o("strong",[t._v("Total Disk Space")]),t._v(": the totaly amount of ram the Node should be able to allocate automatically.")]),t._v(" "),o("li",[o("strong",[t._v("Disk Overallocate")]),t._v(": works the same way as memory overallocation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Don't forget to account for OS overhead and other software requirements on machines.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Daemon Port")]),this._v(": the port that the Daemon should listen on.")]),this._v(" "),e("li",[e("strong",[this._v("Daemon SFTP Port")]),this._v(": the port the daemon sftp-server or standalone SFTP server listen on.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-the-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-daemon","aria-hidden":"true"}},[this._v("#")]),this._v(" Install the Daemon")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuring-the-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring the Node")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:o(138),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Copy and paste the config into the "),e("code",[this._v("core.json")]),this._v(" folder. (Default location is "),e("code",[this._v("/srv/daemon/config/core.json")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"auto-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-deploy","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto-Deploy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This will generate a command to run on the node server to configure the daemon for you. (This needs to be run in the "),e("code",[this._v("/srv/daemon")]),this._v(" folder)")])}],n=o(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[t._m(0),t._v(" "),o("p"),t._m(1),o("p"),t._v(" "),t._m(2),t._v(" "),o("p",[t._v("Head to the admin panel and click the Nodes tab on the left sidebar. After that, click 'Create New' on the\ntop right side to open the page to add a node.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),o("p",[t._v("At this point you'll need to have the daemon installed on your machine. Check out the "),o("router-link",{attrs:{to:"/daemon/installing.html"}},[t._v("documentation")]),t._v("\nfor more information, or try one of the community guides for "),o("router-link",{attrs:{to:"/community/installation-guides/daemon/centos7.html"}},[t._v("CentOS")]),t._v(",\n"),o("router-link",{attrs:{to:"/community/installation-guides/daemon/ubuntu1804.html"}},[t._v("Ubuntu")]),t._v(", or "),o("router-link",{attrs:{to:"/community/installation-guides/daemon/debian9.html"}},[t._v("Debian")]),t._v(".")],1),t._v(" "),t._m(12),t._v(" "),o("p",[t._v("Go to the Node Configuration page")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])},a,!1,null,null,null);e.default=i.exports}}]);