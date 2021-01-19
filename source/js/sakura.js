<% if (theme.sakura.enable) { %>
<script type="text/javascript">
    //只在桌面版网页启用特效
    var windowWidth = $(window).width();
    if (windowWidth > 768) {
        document.write('<script type="text/javascript" src="/js/sakura.js"></script>');
    }
</script> <% } %>
