import{_ as n,X as s,Y as a,a1 as e}from"./framework-9435e890.js";const t={},i=e(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401876 &lt;string_length&gt;:
b0:
  401876:	80 3f 00             	cmpb   $0x0,(%rdi)
  401879:	74 12                	je     40188d &lt;string_length+0x17&gt;
  40187b:	48 89 fa             	mov    %rdi,%rdx
b1:
  40187e:	48 83 c2 01          	add    $0x1,%rdx
  401882:	89 d0                	mov    %edx,%eax
  401884:	29 f8                	sub    %edi,%eax
  401886:	80 3a 00             	cmpb   $0x0,(%rdx)
  401889:	75 f3                	jne    40187e &lt;string_length+0x8&gt;
  40188b:	f3 c3                	repz retq
b2:
  40188d:	b8 00 00 00 00       	mov    $0x0,%eax
  401892:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">string_length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">void</span> <span class="token function">string_length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rdi <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> rdi<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token operator">++</span>rdx<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rdx<span class="token punctuation">;</span>   <span class="token comment">// 32-bit</span>
  rax <span class="token operator">-=</span> rdi<span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rdx <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">string_length</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">char</span><span class="token operator">*</span> rdx <span class="token operator">=</span> rdi<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">*</span>rdx<span class="token punctuation">)</span> <span class="token operator">++</span>rdi<span class="token punctuation">;</span>
  <span class="token keyword">return</span> rdx <span class="token operator">-</span> rdi<span class="token punctuation">;</span>  <span class="token comment">// rax</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[i];function o(c,l){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","index.html.vue"]]);export{d as default};
