page-valid
==========

> 自动化页面上线检查

Goal
----

* SEO规则校验
    1. 应包含基本meta：`<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`、`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`、`<meta name="renderer" content="webkit|ie-comp|ie-stand">`
    2. 唯一标签相关，`<link rel=\"canonical\">`
    3. meta keywords存在（考虑是否需要进一步校验有效性）
    4. meta description存在（考虑是否需要进一步校验有效性）
    5. 总链接数小于100
    6. 使用HTML5定义标签<!doctype html>
    7. nofollow应当少于正常链接
    8. 不应当使用style直接inline css，而应该使用link
    9. hx检测，不能夸序存在，即h3存在，h1存在，但h2不存在是不允许的
    10. 应包含h1标签，并且h1应当包含至少一个关键字
    11. src和href等URI中只能包含这些字符A-Za-z0-9._~:/?#[]@!$&%'()*+,;=-
    12. 链接应使用绝对路径或根路径
    13. `隐私政策`、`服务条款`、`设置`、`登录`、`登入`、`注册`、`快速注册`应加上nofollow
    14. 禁止a标签href为空
    15. 不同的http query应当导致不同的页面title，否则就是无意义的query
    16. 不应包含无用注释
* 图片大小校验（分mobile和pc）
* <del>Javascript安全扫描</del>
* pagespeed校验