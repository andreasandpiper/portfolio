---
layout: post
title: "Web Development with Accessibility"
date: 2021-03-03
categories: [accessibility, HTML]
excerpt_separator: <!--more-->
---

An overview of development with accessibility in mind

<!--more-->

The goal of the web was for everyone to have access to it, and should provide a positive experience from all uses from all types of visual, auditory, neurological, physical, speech, and cognitive backgrounds.

Web accessibility means websites are designed and developed so people with disabilities can use them. Often times, these websites even benefit those without disabilities, and creates a better user experience.

- Visual impairment includes partial or total inability to see or perceive color contrasts

- Hearing impairment includes users with reduced ability to hear

- Motor skills and physical disabilities includes those with difficulty moving parts of their bodies and amking precise movements with the mouse

- Photosensitive seizures, such as epilepsy, often triggered by flashing lights

- Cognitive disabilities, includes users with varies levels of cognitive ability, and conditions such as dementia and dyslexia can affect this.

To work around these issues, people will use assistant technology to browse the internetr. This includes screen readers that vocalize the text on the page, speech recognition software the convert speech to text, braille terminals, and even alternitive style keyboards.

As developers, we can develop with accessibility in mind, know the best strategies to convey meaning correctly through to both the users and to assistive technology.

## Make sure your site is keyboard friendly

A user should be able to access all pages, links, content, etc without the use of a mouse.

Make sure all clickable/ user interactive content is accessible with the Tab key, and should be able to jump around the website with this key.

## Make sure all content is easily accessible

This can be a problem if a page contains dynamic content, which means content can change without a page refresh. Many screen readers will only “read” the site as it appears on first load.

Make users aware of when content on the page changes

Use `Aria` landmarks, these are tags you add to content in order to clearly define it on the page. You can create a dynamic content tag, such as “live region”, which enables screen readers to understand content as it changes. Another example is the main navigation header, by adding role=”navigation”, we mark it as a navigation region. However, no need to use role with HTML elements with semantic meaning, such as <ul>, try to only use with span and div. These roles will override the element’s native role.

Common Aria landmarks:

- banner ( HTML5 `<header>`) contains the site-oriented content of each page, like the logo, usually located at the top of the page. There should only be one banner landmark per page.

- complementary ( HTML5 `<aside>`) a section of content that complements the main content but also retains its meaning when separated from the main content

- contentinfo ( HTML5 `<footer>`) contains content usually found in the footer of a page, like copyright and privacy statements. There should only be one contentinfo landmark per page.

- form ( HTML5 `<form>`) contains form input elements which can be edited and submitted by the user

- main ( HTML5 `<main>`) the main content of the page. There should only be one main landmark per page.

- navigation ( HTML5 `<nav>`) a collection of navigation links to navigate the site or page, this can let users skip directly to specific navigations

- search ( HTML5 `<form> or div`) a search tool

- application ( HTML5 `<div>`) represents a unique software unit, and keyboard commands are handled by the application rather than the browser itself. This role should be used sparingly.

``aria-label` can also be added and can give more detailed information about the role type, however, not all screen readers will read the text in aria-label

```
<div id="nav" role="navigation" aria-label="main navigation">
  <ul>
    <li>Home</li>
    <li>Products</li>
    <li>Support</li>
  </ul>
</div>

<div id="nav" role="navigation" aria-label="product navigation">
  <ul>
    <li>Product Description</li>
    <li>Technical Specifications</li>
    <li>Customer Reviews</li>
  </ul>
</div>
```

`aria-labelledby` is used when a landmark can be labelled by another on screen element.

```
<div role="navigation" aria-labelledby="nav-heading">
  <h2 id="nav-heading">Learn About This Product</h2>
  <ul>
    <li>Product Description</li>
    <li>Technical Specifications</li>
    <li>Customer Reviews</li>
  </ul>
</div>
```

Older browsers like IE11 doesn’t always recognize HTML5 elements and map them to a landmark role. In these cases, you can add the role manually.

## Add alt text to all images

Also called alt attribute, alt descriptions, or alt tags, is accessed by screen readers to “read” the picture. Also, using this attribute can also help improve site’s SEO ( search engine crawling for info).

## Choose colors carefully

Color contrast is important! Make sure text stands out against the background.

[https://contrastchecker.com/](https://contrastchecker.com/)

[https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

React storybook has an ally addon [https://storybook.js.org/addons/@storybook/addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y)

## Use header to structure content correctly

Correct header definitions can help improve flow and understanding.

- You should only use one H1 per page – usually as the page title. This can be followed by subheadings starting with H2, which can then be nested further with H3, followed by H4. These should always be used in order so you should avoid using an H4 directly after an H2 (and so on).

## Design your forms for accessibility

- All fields are labeled

## Don’t use tables for anything except tabular data

[https://www.w3.org/WAI/tutorials/tables/](https://www.w3.org/WAI/tutorials/tables/)

For example, you should never use a table for layouts, lists, or anything else. This can be confusing to screen readers and similar devices.

## Enable resizable text that doesn’t break your site

Most browsers and devices let users resize text.

- avoid using absolute units, such as pixel

## Separate content and style

use html for content, css for styles, more efficient for readers

---

## Cheatsheet

- title every page
- use HTML5 semantic markup
- Use relative values for fonts
- Identify language (e.g., <html lang=“en”>)
- Be consistent in content that is similar on multiple pages, such as navigation
- Use headers and labels wisely, be informative
- Let users know where they are (ex. breadcrumbs, page numbers, etx)
- Use Appropriate Labels, Titles, and Values with Forms
- provide informative instructions with content that needs user input
- Provide Alternative Text for Images
- Avoid surprises, if content changes, inform the user
- Don’t create time limits on user inputs

For a more detailed checklist, visit [https://webaim.org/standards/wcag/checklist](https://webaim.org/standards/wcag/checklist)

## Sources

[https://www.dreamhost.com/blog/make-your-website-accessible/](https://www.dreamhost.com/blog/make-your-website-accessible/)

[https://make.wordpress.org/accessibility/handbook/markup/aria-landmarks/](https://make.wordpress.org/accessibility/handbook/markup/aria-landmarks/)

[https://itaccessibility.tamu.edu/help/web_development.php](https://itaccessibility.tamu.edu/help/web_development.php)
