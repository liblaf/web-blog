import{_ as n,X as s,Y as a,a1 as e}from"./framework-9435e890.js";const t={},p=e(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>00000000004015fc &lt;phase_5&gt;:
b0:
  4015fc:	53                   	push   %rbx
  4015fd:	48 89 fb             	mov    %rdi,%rbx
  401600:	e8 71 02 00 00       	callq  401876 &lt;string_length&gt;
  401605:	83 f8 06             	cmp    $0x6,%eax
  401608:	74 05                	je     40160f &lt;phase_5+0x13&gt;
  40160a:	e8 4d 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b1:
  40160f:	b8 00 00 00 00       	mov    $0x0,%eax
  401614:	ba 00 00 00 00       	mov    $0x0,%edx
b2:
  401619:	0f b6 34 03          	movzbl (%rbx,%rax,1),%esi
  40161d:	83 e6 0f             	and    $0xf,%esi
  401620:	48 8d 0d b9 1b 00 00 	lea    0x1bb9(%rip),%rcx        # 4031e0 &lt;array.3354&gt;
  401627:	03 14 b1             	add    (%rcx,%rsi,4),%edx
  40162a:	48 83 c0 01          	add    $0x1,%rax
  40162e:	48 83 f8 06          	cmp    $0x6,%rax
  401632:	75 e5                	jne    401619 &lt;phase_5+0x1d&gt;
  401634:	83 fa 40             	cmp    $0x40,%edx
  401637:	74 05                	je     40163e &lt;phase_5+0x42&gt;
  401639:	e8 1e 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b3:
  40163e:	5b                   	pop    %rbx
  40163f:	90                   	nop
  401640:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_5</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  rbx <span class="token operator">=</span> rdi<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b2<span class="token operator">:</span>
  rsi <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> rax<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 32-bit</span>
  rsi <span class="token operator">&amp;=</span> <span class="token number">0xf</span><span class="token punctuation">;</span>               <span class="token comment">// 32-bit</span>
  rcx <span class="token operator">=</span> <span class="token number">0x4031e0</span><span class="token punctuation">;</span>           <span class="token comment">// 4031e0 &lt;array.3354&gt;</span>
  rdx <span class="token operator">+=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rcx <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token operator">++</span>rax<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token number">0x6</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rdx <span class="token operator">==</span> <span class="token number">0x40</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack" aria-hidden="true">#</a> Hack</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) x/16xw 0x4031e0
0x4031e0 &lt;array.3354&gt;:  0x00000002      0x0000000a      0x00000006      0x00000001
0x4031f0 &lt;array.3354+16&gt;:       0x0000000c      0x00000010      0x00000009      0x00000003
0x403200 &lt;array.3354+32&gt;:       0x00000004      0x00000007      0x0000000e      0x00000005
0x403210 &lt;array.3354+48&gt;:       0x0000000b      0x00000008      0x0000000f      0x0000000d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_5</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rax <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> rsi <span class="token operator">=</span> rdi<span class="token punctuation">[</span>rax<span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token operator">*</span> rcx <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token number">0x00000002</span><span class="token punctuation">,</span> <span class="token number">0x0000000a</span><span class="token punctuation">,</span> <span class="token number">0x00000006</span><span class="token punctuation">,</span> <span class="token number">0x00000001</span><span class="token punctuation">,</span> <span class="token number">0x0000000c</span><span class="token punctuation">,</span> <span class="token number">0x00000010</span><span class="token punctuation">,</span>
        <span class="token number">0x00000009</span><span class="token punctuation">,</span> <span class="token number">0x00000003</span><span class="token punctuation">,</span> <span class="token number">0x00000004</span><span class="token punctuation">,</span> <span class="token number">0x00000007</span><span class="token punctuation">,</span> <span class="token number">0x0000000e</span><span class="token punctuation">,</span> <span class="token number">0x00000005</span><span class="token punctuation">,</span>
        <span class="token number">0x0000000b</span><span class="token punctuation">,</span> <span class="token number">0x00000008</span><span class="token punctuation">,</span> <span class="token number">0x0000000f</span><span class="token punctuation">,</span> <span class="token number">0x0000000d</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    rdx <span class="token operator">+=</span> rcx<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rdx <span class="token operator">!=</span> <span class="token number">0x40</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><p>构造长度为 6 的字符串, 使得最终 <code>rdx == 0x40</code> 即可. 例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0x40 = 64 = 10 + 10 + 11 + 11 + 11 + 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则 <code>rdi</code> 应满足</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(rdi[0, 1] &amp; 0xf) == 1
(rdi[2, 3, 4, 5] &amp; 0xf) == 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也即</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(rdi[0, 1] % 16) == 1
(rdi[2, 3, 4, 5] % 16) == 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不妨取</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rdi[0, 1] = &#39;a&#39; = 97
rdi[2, 3, 4, 5] = &#39;l&#39; = 108
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>得到</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>aallll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
