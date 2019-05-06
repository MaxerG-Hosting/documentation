(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{146:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),s("p",[t._v("Pterodactyl Panel is designed to run on your own web server. You will need to have root access to your server in order to run and use this panel.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Pterodactyl runs on a wide range of operating systems, so pick whichever you are most comfortable using.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("The commands below are simply an example of how you might install these dependencies. Please consult with your\noperating system's package manager to determine the correct packages to install.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll\nneed composer installed before continuing in this process.")]),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("The first step in this process is to create the folder where the panel will live and then move ourselves into that\nnewly created folder. Below is an example of how to perform this operation.")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("Now that all of the files have been downloaded we need to configure some core aspects of the Panel.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Database Configuration")]),t._v(" "),s("p",[t._v("You will need a database setup and a user with the correct permissions created for that database before\ncontinuing any further. If you are unsure how to do this, please have a look at "),s("router-link",{attrs:{to:"/tutorials/mysql_setup.html"}},[t._v("Setting up MySQL")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("First we will copy over our default environment settings file, install core dependencies, and then generate a\nnew application encryption key.")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("Pterodactyl's core environment is easily configured using a few different CLI commands built into the app. This step\nwill cover setting up things such as sessions, caching, database credentials, and email sending.")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),s("p",[t._v("The last step in the installation process is to set the correct permissions on the Panel files so that the webserver can\nuse them correctly.")]),t._v(" "),t._m(28),t._m(29),t._v(" "),s("p",[t._v("We make use of queues to make the application faster and handle sending emails and other actions in the background.\nYou will need to setup the queue worker for these actions to be processed.")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),s("p",[t._v("Next you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible\nfor sending emails and handling many other background tasks for Pterodactyl.")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),s("p",[t._v("If you are are using redis for your system, you will want to make sure to enable that it will start on boot. You can do that by running the following command:")]),t._v(" "),t._m(39),s("p",[t._v("Finally, enable the service and set it to boot on machine start.")]),t._v(" "),t._m(40)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#picking-a-server-os"}},[t._v("Picking a Server OS")])]),s("li",[s("a",{attrs:{href:"#dependencies"}},[t._v("Dependencies")]),s("ul",[s("li",[s("a",{attrs:{href:"#example-dependency-installation"}},[t._v("Example Dependency Installation")])]),s("li",[s("a",{attrs:{href:"#installing-composer"}},[t._v("Installing Composer")])])])]),s("li",[s("a",{attrs:{href:"#download-files"}},[t._v("Download Files")])]),s("li",[s("a",{attrs:{href:"#installation"}},[t._v("Installation")]),s("ul",[s("li",[s("a",{attrs:{href:"#environment-configuration"}},[t._v("Environment Configuration")])]),s("li",[s("a",{attrs:{href:"#database-setup"}},[t._v("Database Setup")])]),s("li",[s("a",{attrs:{href:"#add-the-first-user"}},[t._v("Add The First User")])]),s("li",[s("a",{attrs:{href:"#set-permissions"}},[t._v("Set Permissions")])])])]),s("li",[s("a",{attrs:{href:"#queue-listeners"}},[t._v("Queue Listeners")]),s("ul",[s("li",[s("a",{attrs:{href:"#crontab-configuration"}},[t._v("Crontab Configuration")])]),s("li",[s("a",{attrs:{href:"#create-queue-worker"}},[t._v("Create Queue Worker")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You are expected to understand how to read documentation to use this Panel. We have spent many hours detailing how to install or upgrade our\nsoftware; take some time and read rather than copy and pasting and then complaining when things do not work. This panel does\nnot exist as a drag-and-drop service to run your servers. It is a highly complex system requiring multiple dependencies and\nadministrators willing to spend some time learning how to use it. "),e("strong",[this._v("If you expect to be able to install this with no understanding\nof basic linux system administration you should stop and turn around now.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"picking-a-server-os"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#picking-a-server-os","aria-hidden":"true"}},[this._v("#")]),this._v(" Picking a Server OS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Pterodactyl does not support most OpenVZ systems due to incompatabilities with Docker. If you are planning on running\nthis software on an OpenVZ based system you will — most likely — not be successful.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Operating System")]),t._v(" "),s("th",[t._v("Version")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Supported")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("Ubuntu")])]),t._v(" "),s("td",[t._v("14.04")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("⚠️")]),t._v(" "),s("td",[t._v("Documentation assumes changes to "),s("code",[t._v("systemd")]),t._v(" introduced in "),s("code",[t._v("16.04")])])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("16.04")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),s("td",[t._v("Documentation written assuming Ubuntu 16 as the base OS.")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("18.04")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("CentOS")])]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("🚫")]),t._v(" "),s("td",[t._v("Does not support all of the required packages.")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("7")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Debian")])]),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("9")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencies")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("PHP "),s("code",[t._v("7.2")]),t._v(" with the following extensions: "),s("code",[t._v("cli")]),t._v(", "),s("code",[t._v("openssl")]),t._v(", "),s("code",[t._v("gd")]),t._v(", "),s("code",[t._v("mysql")]),t._v(", "),s("code",[t._v("PDO")]),t._v(", "),s("code",[t._v("mbstring")]),t._v(", "),s("code",[t._v("tokenizer")]),t._v(", "),s("code",[t._v("bcmath")]),t._v(", "),s("code",[t._v("xml")]),t._v(" or "),s("code",[t._v("dom")]),t._v(", "),s("code",[t._v("curl")]),t._v(", "),s("code",[t._v("zip")])]),t._v(" "),s("li",[t._v("MySQL "),s("code",[t._v("5.7")]),s("strong",[t._v("or")]),t._v(" MariaDB "),s("code",[t._v("10.1.3")]),t._v(" or higher")]),t._v(" "),s("li",[t._v("Redis ("),s("code",[t._v("redis-server")]),t._v(")")]),t._v(" "),s("li",[t._v("A webserver (Apache, NGINX, Caddy, etc.)")]),t._v(" "),s("li",[s("code",[t._v("curl")])]),t._v(" "),s("li",[s("code",[t._v("tar")])]),t._v(" "),s("li",[s("code",[t._v("unzip")])]),t._v(" "),s("li",[s("code",[t._v("git")])]),t._v(" "),s("li",[s("code",[t._v("composer")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-dependency-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-dependency-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Dependency Installation")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v('# Add "add-apt-repository" command')]),t._v("\napt -y "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" software-properties-common "),s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Add additional repositories for PHP, Redis, and MariaDB")]),t._v("\nLC_ALL"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("C.UTF-8 add-apt-repository -y ppa:ondrej/php\nadd-apt-repository -y ppa:chris-lea/redis-server\n"),s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Update repositories list")]),t._v("\napt update\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Add universe repository if you are on Ubuntu 18.04")]),t._v("\napt-add-repository universe\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Install Dependencies")]),t._v("\napt -y "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" php7.2 php7.2-cli php7.2-gd php7.2-mysql php7.2-pdo php7.2-mbstring php7.2-tokenizer php7.2-bcmath php7.2-xml php7.2-fpm php7.2-curl php7.2-zip mariadb-server nginx "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" unzip "),s("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" redis-server\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-composer","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Composer")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sS https://getcomposer.org/installer "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" php -- --install-dir"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin --filename"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("composer\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"download-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Download Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" -p /var/www/pterodactyl\n"),e("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" /var/www/pterodactyl\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Once you have created a new directory for the Panel and moved into it you'll need to download the Panel files. This\nis as simple as using "),e("code",[this._v("curl")]),this._v(" to download our pre-packaged content. Once it is downloaded you'll need to unpack the archive\nand then set the correct permissions on the "),e("code",[this._v("storage/")]),this._v(" and "),e("code",[this._v("bootstrap/cache/")]),this._v(" directories. These directories\nallow us to store files as well as keep a speedy cache available to reduce load times.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/download/v0.7.13/panel.tar.gz\n"),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" --strip-components"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("1 -xzvf panel.tar.gz\n"),s("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" -R 755 storage/* bootstrap/cache/\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" .env.example .env\ncomposer "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" --no-dev --optimize-autoloader\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Only run the command below if you are installing this Panel for")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# the first time and do not have any Pterodactyl Panel data in the database.")]),t._v("\nphp artisan key:generate --force\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Back up your encryption key (APP_KEY in the "),e("code",[this._v(".env")]),this._v(" file). It is used as an encryption key for all data that needs to be stored securely (e.g. api keys).\nStore it somewhere safe - not just on your server. If you lose it, all encrypted data is useless and can't be restored, even if you have database backups.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"environment-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("php artisan p:environment:setup\nphp artisan p:environment:database\n\n"),e("span",{attrs:{class:"token comment"}},[this._v('# To use PHP\'s internal mail sending (not recommended), select "mail". To use a')]),this._v("\n"),e("span",{attrs:{class:"token comment"}},[this._v('# custom SMTP server, select "smtp".')]),this._v("\nphp artisan p:environment:mail\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"database-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Database Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now we need to setup all of the base data for the Panel in the database you created earlier. "),e("strong",[this._v("The command below\nmay take some time to run depending on your machine. Please "),e("em",[this._v("DO NOT")]),this._v(" exit the process until it is completed!")]),this._v(" This\ncommand will setup the database tables and then add all of the Nests & Eggs that power Pterodactyl.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("php artisan migrate --seed\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"add-the-first-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-the-first-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Add The First User")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You'll then need to create an administrative user so that you can log into the panel. To do so, run the command below.\nAt this time passwords "),e("strong",[this._v("must")]),this._v(" meet the following requirements: 8 characters, mixed case, at least one number.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("php artisan p:user:make\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"set-permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-permissions","aria-hidden":"true"}},[this._v("#")]),this._v(" Set Permissions")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# If using NGINX or Apache (not on CentOS):")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R www-data:www-data * \n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# If using NGINX on CentOS:")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R nginx:nginx *\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# If using Apache on CentOS")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R apache:apache *\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"queue-listeners"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queue-listeners","aria-hidden":"true"}},[this._v("#")]),this._v(" Queue Listeners")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"crontab-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Crontab Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The first thing we need to do is create a new cronjob that runs every minute to process specific Pterodactyl tasks, such\nas session cleanup and sending scheduled tasks to daemons. You'll want to open your crontab using "),e("code",[this._v("sudo crontab -e")]),this._v(" and\nthen paste the line below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("* * * * * php /var/www/pterodactyl/artisan schedule:run "),e("span",{attrs:{class:"token operator"}},[this._v(">>")]),this._v(" /dev/null 2"),e("span",{attrs:{class:"token operator"}},[this._v(">")]),e("span",{attrs:{class:"token operator"}},[this._v("&")]),this._v("1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"create-queue-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-queue-worker","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Queue Worker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("If you are using Ubuntu 14.04 you cannot use this method to run your queue worker. Please see these instructions for\ninstalling Supervisor and setting up your queue. Ensure you use the same ExecStart line as below.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a file called "),e("code",[this._v("pteroq.service")]),this._v(" in "),e("code",[this._v("/etc/systemd/system")]),this._v(" with the contents below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Pterodactyl Queue Worker File\n# ----------------------------------\n\n[Unit]\nDescription=Pterodactyl Queue Worker\nAfter=redis-server.service\n\n[Service]\n# On some systems the user and group might be different.\n# Some systems use `apache` or `nginx` as the user and group.\nUser=www-data\nGroup=www-data\nRestart=always\nExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3\n\n[Install]\nWantedBy=multi-user.target\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Redis on CentOS")]),t._v(" "),s("p",[t._v("If you are using CentOS, you will need to replace "),s("code",[t._v("redis-server.service")]),t._v(" with "),s("code",[t._v("redis.service")]),t._v(" at the "),s("code",[t._v("After=")]),t._v(" line in order to ensure "),s("code",[t._v("redis")]),t._v(" starts before the queue worker.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("If you are not using "),e("code",[this._v("redis")]),this._v(" for anything you should remove the "),e("code",[this._v("After=")]),this._v(" line, otherwise you will encounter errors\nwhen the service starts.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" systemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" redis-server\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" systemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" --now pteroq.service\n")])])])}],!1,null,null,null);e.default=n.exports}}]);