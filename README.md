Live link: [Chefs table](https://chefs-table-ab.surge.sh/)

<br>

<b>Leaning:</b> When I set some styles in index.css, and then apply the same class or ID elsewhere (like in JSX with Tailwind), the styles from index.css still take effect — even if I try to override them. So, avoid 

- Avoid adding reusable styles directly to index.css unless absolutely necessary. If you must, ensure they don’t conflict with your Tailwind utility classes or structure them properly using Tailwind’s layering system.