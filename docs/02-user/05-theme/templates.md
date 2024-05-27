---
sidebar_position: 1
description: Content layout
---

# Templates

[https://www.helloqt.de/wp-admin/site-editor.php?path=%2Fwp_template](https://www.helloqt.de/wp-admin/site-editor.php?path=%2Fwp_template)

Templates are the core of a WordPress theme and are used to tell WordPress how to structure and display various types of content. The design and layout of everything you see on the public side of the site (pages, posts, blog etc.) is rendered using a template.

Each template is made up of content blocks and template parts which can be shared among multiple templates.

## Available Templates

[https://www.helloqt.de/wp-admin/site-editor.php?path=%2Fwp_template%2Fall](https://www.helloqt.de/wp-admin/site-editor.php?path=%2Fwp_template%2Fall)

|   # | Template              | Details                                                               |
| --: | --------------------- | --------------------------------------------------------------------- |
|  1. | All archives          | Displays a filtered post list. E.g. By date or tag                    |
|  2. | Case Study Archives   | Displays a list case studies                                          |
|  3. | Author Archives       | Displays a list of posts for a given author                           |
|  4. | Category Archives     | Displays a list of posts for a given category                         |
|  5. | Search Results        | Shows the search results                                              |
|  6. | Index / Blog Home     | The blog home page. It displays the latest blog posts                 |
|  7. | Front Page            | Displays the static home page                                         |
|  8. | Pages                 | Displays all pages other than the home page                           |
|  9. | Page: 404 (Not Found) | It is displayed when the user types in an invalid URL                 |
| 10. | Page - No Title       | Displays a page without its title. Can be selected from page settings |
| 11. | Single Posts          | Displays a single post.                                               |
| 12. | Post - No Title       | Displays a post without its title. Can be selected from post settings |
| 13. | Single Case Study     | Displays a single case study.                                         |

## Content Management

Even though they are editable/customizable, the templates render content in accordance with HelloQt’s design and do not require admin management. Places that contain static or configurable content are managed separately as reusable template parts discussed next. This is to make content and especially translation management easy

## Translation Management

Currently, none of the templates require any translation as we are using the theme’s default. But, in case a template is edited/customized, it will need to be translated to all available languages.

This can be done from WPML’s Translation Manager.

https://www.helloqt.de/wp-admin/admin.php?page=tm%2Fmenu%2Fmain.php&sm=dashboard.

On the first dropdown, select Templates and Filter to view translatable templates. Then select them for translation.
