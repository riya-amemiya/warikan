import { Helmet } from 'react-helmet';
const SEO = ({
    title,
    description,
    keywords,
    siteUrl,
    siteName,
}: {
    title: string;
    description: string;
    keywords: string;
    siteUrl: string;
    siteName: string;
}) => {
    return (
        <Helmet>
            <html lang="ja"></html>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta itemProp="name" content={siteName} />
            <link rel="canonical" href={siteUrl} />
            <meta property="og:site_name" content={title} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:type" content="website" />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                crossOrigin="anonymous"></link>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-LT883YWQRK"></script>
            <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
            <meta name="google-site-verification" content="cjjcWBnEoVL7p0wuvHywaedD6h-3O0B2seFntNkt0jk" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://blissful-swartz-9aac04.netlify.app/" />
            <meta property="twitter:title" content="暇人のブログ" />
            <meta property="twitter:description" content="暇な高校生が緩く更新するサイト" />
            <meta property="twitter:image" content="" />
        </Helmet>
    );
};
export default SEO;
