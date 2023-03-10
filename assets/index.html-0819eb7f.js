import{_ as n,X as s,Y as a,a1 as e}from"./framework-9435e890.js";const t={},p=e(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401b98 &lt;read_six_numbers&gt;:
b0:
  401b98:	48 83 ec 18          	sub    $0x18,%rsp
  401b9c:	48 89 f2             	mov    %rsi,%rdx
  401b9f:	48 8d 4e 04          	lea    0x4(%rsi),%rcx
  401ba3:	48 8d 46 14          	lea    0x14(%rsi),%rax
  401ba7:	48 89 44 24 08       	mov    %rax,0x8(%rsp)
  401bac:	48 8d 46 10          	lea    0x10(%rsi),%rax
  401bb0:	48 89 04 24          	mov    %rax,(%rsp)
  401bb4:	4c 8d 4e 0c          	lea    0xc(%rsi),%r9
  401bb8:	4c 8d 46 08          	lea    0x8(%rsi),%r8
  401bbc:	48 8d 35 66 18 00 00 	lea    0x1866(%rip),%rsi        # 403429 &lt;array.3354+0x249&gt;
  401bc3:	b8 00 00 00 00       	mov    $0x0,%eax
  401bc8:	e8 63 f5 ff ff       	callq  401130 &lt;__isoc99_sscanf@plt&gt;
  401bcd:	83 f8 05             	cmp    $0x5,%eax
  401bd0:	7f 05                	jg     401bd7 &lt;read_six_numbers+0x3f&gt;
  401bd2:	e8 85 ff ff ff       	callq  401b5c &lt;explode_bomb&gt;
b1:
  401bd7:	48 83 c4 18          	add    $0x18,%rsp
  401bdb:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">read_six_numbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  rsp <span class="token operator">-=</span> <span class="token number">0x18</span><span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> rsi<span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> rsi <span class="token operator">+</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsi <span class="token operator">+</span> <span class="token number">0x14</span><span class="token punctuation">;</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span> <span class="token operator">=</span> rax<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsi <span class="token operator">+</span> <span class="token number">0x10</span><span class="token punctuation">;</span>
  <span class="token operator">*</span>rsp <span class="token operator">=</span> rax<span class="token punctuation">;</span>
  r9 <span class="token operator">=</span> rsi <span class="token operator">+</span> <span class="token number">0xc</span><span class="token punctuation">;</span>
  r8 <span class="token operator">=</span> rsi <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> <span class="token number">0x403429</span><span class="token punctuation">;</span> <span class="token comment">// 403429 &lt;array.3354+0x249&gt;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> __isoc99_sscanf @<span class="token function">plt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">&gt;</span> <span class="token number">0x5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  rsp <span class="token operator">+=</span> <span class="token number">0x18</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">read_six_numbers</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> rsi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> <span class="token string">&quot;%d %d %d %d %d %d&quot;</span><span class="token punctuation">,</span> rsi<span class="token punctuation">,</span> rsi <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rsi <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        rsi <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">,</span> rsi <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">,</span> rsi <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>rax <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack" aria-hidden="true">#</a> Hack</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) x/s 0x403429
0x403429:       &quot;%d %d %d %d %d %d&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
