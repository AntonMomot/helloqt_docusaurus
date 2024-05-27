---
sidebar_position: 2
description: The pieces that make up a template
---

# Template Parts

https://www.helloqt.de/wp-admin/site-editor.php?path=%2Fpatterns&categoryType=wp_template_part&categoryId=header

As the name suggests, template parts makeup parts of a template. These parts can be used in multiple templates that share a similar structure and/or content.

The theme provides the following template parts: -

https://www.helloqt.de/wp-admin/site-editor.php?path=%2Fwp_template_part%2Fall

|     | Template Part | Templates Details |
| --- | ------------- | ----------------- |

## Configuration and Content Management

Most of the template parts will require some initial configuration or static content. For example, as we’ll discuss later, template parts that contain navigation menus will need to be assigned the appropriate navigation. Also, some parts like the Blog Title contain static text which might need to be altered.

The table below highlights the content and required configuration for each template part. Static text content is highlighted. The initial real text will need to be added for these areas.

```
Template Part

Configuration

Content

|

Header

Main navigation

Site logo, Main menu, Language Switcher

|

Header - Home Page

Home page main navigation

Site logo, Main menu, Language Switcher

|

Footer

Main, Contact and Bottom Navigation, Social Icon links

Site logo, Company address, Navigation heading, Footer menu, Contacts Heading,
Contacts menu, Contact text, Social icons, Copyright text, Bottom menu

|

Navigation Drawer

Main and Bottom Navigation

Site logo, Search button, Language Switcher, Main menu, Bottom menu

|

Newsletter Form

Contact Form

Heading, Text, Contact Form

|

Search Dialog

N/A

Search Form Label, Search Form Placeholder, Search Form

|

Blog Page Title

N/A

Heading, Text, Post filter form

|

Author Archives Title

N/A

Heading, Text, Author bio

```

## Translation Management

Like templates, if a template part is edited/customized in the site editor, it will need to be translated. This is the case for most of the current template parts since they need some configuration and/or some static content.

Since most of them do not contain any static content, they will not have any text to translate and therefore anyone can translate them. This is necessary every time there is a change to the original parts.

All initial translations shall be created during the final theme setup after which editors can update over time.

Translation can be done from WPML’s Translation Manager.

https://www.helloqt.de/wp-admin/admin.php?page=tm%2Fmenu%2Fmain.php&sm=dashboard.

On the first dropdown, select Templates Parts and Filter to view translatable templates parts. Then select them for translation.
