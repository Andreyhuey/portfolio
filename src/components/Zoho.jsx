const Zoho = () => {
  if (typeof window !== "undefined") {
    let $zoho = window.$zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode:
        "674abb03b75b55f1453edb339290361dac44d3cc60e406b13aaf23ed85abe4e654782c14d5367aa05ac148e35e8087d0",
      values: {},
      ready: function () {},
    };
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zoho.com/widget";
    const t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
  }
};

export default Zoho;
