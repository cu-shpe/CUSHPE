******THIS FILE WAS LAST UPDATED: 5/3/26

Welcome to the new and improved SHPE website! Before starting, I recommend adding the "Live Server" extension on VSCode so you can edit locally and see what the website looks like before pushing to Github!

_________________________________________________________________________________________________________
Firstly, here are a few definitions:
    CSS files: These contain the colors, decorations, and things that make pages pretty!

    JS files: These are JavaScript files that allow for more responsiveness and interactiveness.

    HTML files: These files contain all of the content that structures the page, referencing CSS files and JS files for functionality.

    Paths: If you see different files in a folder, you need to reference these folders to create a path and access the files. Example: If a CSS file is in the folder styling, you will need to reference it by typing Styling/[filename]
_________________________________________________________________________________________________________

Here is what each file does:
    index.html: This is the homepage of the website.
    index.css: This contains all of the styling for index.css
    index.js (in Scripts Folder): Code to make the gallery work in index.html

    events.html: This contains a list of events the chapter does. For now, it will need to be updated frequently, especially the section that lists upcoming events. Once a calendar is set up, or some sort of place where you add updates, you can connect and make this automatic so it requires less maintenance. 
    events.css: contains all the styling for event.html

    programs.html: This contains a list of major events the chapter does. Buttons will need to be updated when applications open up or necessary forms need to be promoted to the general body.
    programs.css: styling for programs.html

    sponsorship.html: This contains relevant info for people interest in sponsoring our chapter. The corporate package links will need to be updated every year.
    sponsorship.css: styling for sponsorship.css

    gallery.html: This contains pictures of our chapter throughout the years since it's establishment.
    gallery.css: styling for gallery.css
    gallery.js (in Scripts Folder): Code to make the gallery work in gallery.html

    contact.html: This contains relevant info for people who want to contact us with any inquiry. Right now, it is a Google form. Consider creating our own Contact Us form to avoid problems with permissions. 
    contact.css: styling for contact form.

    navigation.css and navigation.js: adds responsiveness + styling to navigation bar

    CommunityImages Folder: This is a folder with random images used throughout the site. Feel free to organize as you please. 

    CompanyLogos Folder: This contains images of logos of companies who sponsor us.

    ContactUsImages Folder: This contains images for the carousel on the top of the Contact Us page.

    Documents Folder: This folder contains important documents that need to be linked on the site, such as the corporate package.

    ExecutiveBoard Folder: This contains the headshots of executive board members. This will need to be changed every year. Delete old headshots to avoid clutter.

    OCM Folder: If wanted, this folder will be used to hold the headshots of all OCMs.

    Logos Folder: This folder contains all SHPE relevant logos.

    Scripts Folder: Holds all js files.

_________________________________________________________________________________________________________

Important things to note:
    The navigation bar and footer are currently replicated in every html. Consider moving them into one file so you need only make edits in one place.

    A lot of the content needs to be updated in the Fall. I recommend making this as automatic as possible.

    Add SHPE calendar in events section when made.

    Try to make a contact form that does not rely to on google forms, mostly because forms can cause permissions issues.

    When editing CSS files, feel free to use this site to see what you can do. https://www.w3schools.com/CSSref/index.php
