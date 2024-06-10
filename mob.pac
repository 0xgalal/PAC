function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "aptoide.com")||dnsDomainIs(host, "google-analytics.com")||dnsDomainIs(host, "googleadservices.com")||dnsDomainIs(host, "doubleclick.net")||dnsDomainIs(host, "data-statystic.net")||dnsDomainIs(host, "googletagmanager.com")||dnsDomainIs(host, "googleapis.com")||dnsDomainIs(host, "apple.com")||dnsDomainIs(host, "google.com")||dnsDomainIs(host, "meyerweb.com")||dnsDomainIs(host, "archive.org")||dnsDomainIs(host, "twitter.com")||dnsDomainIs(host, "cloudflare.com")||dnsDomainIs(host, "gstatic.com")||dnsDomainIs(host, "hcaptcha.com")||dnsDomainIs(host, "awswaf.com")||dnsDomainIs(host, "polyfill.io")||dnsDomainIs(host, "jquery.com")||dnsDomainIs(host, "jsdelivr.net")||dnsDomainIs(host, "bignox.com")||dnsDomainIs(host, "microsoft.com")||dnsDomainIs(host, "gstatic.com")||dnsDomainIs(host, "live.com")||dnsDomainIs(host, "googlesyndication.com")||dnsDomainIs(host, "appcenter.ms"))
        return "DIRECT";
    else if (dnsDomainIs(host, "example.com")||dnsDomainIs(host, "api.wit.ai")||dnsDomainIs(host, "demdex.net"))
        return "DIRECT";
    return "PROXY 192.168.1.253:9090";
}
