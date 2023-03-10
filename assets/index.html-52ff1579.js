import{_ as r,X as i,Y as a,Z as e,a0 as n,$ as t,a1 as o,E as l}from"./framework-9435e890.js";const d={},c=o(`<h2 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h2><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>OS</td><td>Ubuntu 22.04 LTS</td></tr><tr><td><code>rbenv --version</code></td><td><code>rbenv 1.2.0</code></td></tr><tr><td><code>brew --version</code></td><td><code>Homebrew 3.5.4</code></td></tr></tbody></table><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><p>When trying to install ruby 2.7.6 using <code>rbenv install 2.7.6</code></p><div class="language-shell-session line-numbers-mode" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token output">Downloading ruby-2.7.6.tar.bz2...
-&gt; https://cache.ruby-lang.org/pub/ruby/2.7/ruby-2.7.6.tar.bz2
Installing ruby-2.7.6...
ruby-build: using readline from homebrew

BUILD FAILED (Ubuntu 22.04 using ruby-build 20220713)

Inspect or clean up the working tree at /tmp/ruby-build.20220716222955.76271.nA4cij
Results logged to /tmp/ruby-build.20220716222955.76271.log

Last 10 log lines:
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in \`require&#39;
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/package.rb:44:in \`&lt;top (required)&gt;&#39;
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in \`require&#39;
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in \`require&#39;
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/installer.rb:11:in \`&lt;top (required)&gt;&#39;
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in \`require&#39;
	from /tmp/ruby-build.20220716222955.76271.nA4cij/ruby-2.7.6/lib/rubygems/core_ext/kernel_require.rb:83:in \`require&#39;
	from ./tool/rbinstall.rb:713:in \`&lt;module:RbInstall&gt;&#39;
	from ./tool/rbinstall.rb:649:in \`&lt;main&gt;&#39;
make: *** [uncommon.mk:373: do-install-all] Error 1
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reason" tabindex="-1"><a class="header-anchor" href="#reason" aria-hidden="true">#</a> Reason</h2><blockquote><p>Unfortunately, Ubuntu 22.04 only provide OpenSSL 3.0. And The supported version of OpenSSL 3.0 are only Ruby 3.1.<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></blockquote><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2>`,8),u={href:"https://github.com/wheatley",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/stuffa",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"libssl-dev",-1),m=e("code",null,"RUBY_CONFIGURE_OPTS=--with-openssl-dir=/path/to/my/openssl",-1),p=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote2"},"[2]"),e("a",{class:"footnote-anchor",id:"footnote-ref2"})],-1),f=o(`<blockquote><p>I had installed rbenv with homebrew (on ubuntu 22.04), and it turns out openssl 1.1.1n was already present through homebrew after that, as I could see by running <code>openssl version</code> and <code>which openssl</code>.<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p></blockquote><p>If necessary, fetch dependencies:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> zlib1g-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">RUBY_CONFIGURE_OPTS</span><span class="token operator">=</span>--with-openssl-dir<span class="token operator">=</span>/home/linuxbrew/.linuxbrew/opt/openssl@1.1 rbenv <span class="token function">install</span> <span class="token number">2.7</span>.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><hr class="footnotes-sep">`,7),v={class:"footnotes"},_={class:"footnotes-list"},g={id:"footnote1",class:"footnote-item"},y={href:"https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2519546",target:"_blank",rel:"noopener noreferrer"},k=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),w={id:"footnote2",class:"footnote-item"},x={href:"https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2552849",target:"_blank",rel:"noopener noreferrer"},q=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),I={id:"footnote3",class:"footnote-item"},S={href:"https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2706874",target:"_blank",rel:"noopener noreferrer"},A=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function R(U,E){const s=l("ExternalLinkIcon");return i(),a("div",null,[c,e("blockquote",null,[e("p",null,[e("a",u,[n("@wheatley"),t(s)]),n(),e("a",b,[n("@stuffa"),t(s)]),n(" Based on this information, I would think that the safest way to build Ruby on Ubuntu 22.04 would be: instead of depending on the system "),h,n(" package, download and compile OpenSSL 1.1.1 into its own directory, then point to that directory with "),m,n(" while compiling with ruby-build."),p])]),f,e("section",v,[e("ol",_,[e("li",g,[e("p",null,[e("a",y,[n("https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2519546"),t(s)]),n(),k])]),e("li",w,[e("p",null,[e("a",x,[n("https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2552849"),t(s)]),n(),q])]),e("li",I,[e("p",null,[e("a",S,[n("https://github.com/rbenv/ruby-build/discussions/1940#discussioncomment-2706874"),t(s)]),n(),A])])])])])}const j=r(d,[["render",R],["__file","index.html.vue"]]);export{j as default};
