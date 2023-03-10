import{_ as n,X as s,Y as a,a1 as e}from"./framework-9435e890.js";const t={},p=e(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>00000000004015a9 &lt;phase_4&gt;:
b0:
  4015a9:	48 83 ec 18          	sub    $0x18,%rsp
  4015ad:	48 8d 4c 24 08       	lea    0x8(%rsp),%rcx
  4015b2:	48 8d 54 24 0c       	lea    0xc(%rsp),%rdx
  4015b7:	48 8d 35 77 1e 00 00 	lea    0x1e77(%rip),%rsi        # 403435 &lt;array.3354+0x255&gt;
  4015be:	b8 00 00 00 00       	mov    $0x0,%eax
  4015c3:	e8 68 fb ff ff       	callq  401130 &lt;__isoc99_sscanf@plt&gt;
  4015c8:	83 f8 02             	cmp    $0x2,%eax
  4015cb:	75 0c                	jne    4015d9 &lt;phase_4+0x30&gt;
  4015cd:	8b 44 24 08          	mov    0x8(%rsp),%eax
  4015d1:	83 e8 02             	sub    $0x2,%eax
  4015d4:	83 f8 02             	cmp    $0x2,%eax
  4015d7:	76 05                	jbe    4015de &lt;phase_4+0x35&gt;
b1:
  4015d9:	e8 7e 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b2:
  4015de:	8b 74 24 08          	mov    0x8(%rsp),%esi
  4015e2:	bf 09 00 00 00       	mov    $0x9,%edi
  4015e7:	e8 85 ff ff ff       	callq  401571 &lt;func4&gt;
  4015ec:	3b 44 24 0c          	cmp    0xc(%rsp),%eax
  4015f0:	74 05                	je     4015f7 &lt;phase_4+0x4e&gt;
  4015f2:	e8 65 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b3:
  4015f7:	48 83 c4 18          	add    $0x18,%rsp
  4015fb:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack" aria-hidden="true">#</a> Hack</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) x/s 0x403435
0x403435:       &quot;%d %d&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_4</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> <span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">,</span> rdx<span class="token punctuation">,</span> rcx<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rax <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  rsi <span class="token operator">=</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rdi <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>       <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsp<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_4</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> <span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// unsigned</span>
    <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token function">func4</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsp<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack-1" tabindex="-1"><a class="header-anchor" href="#hack-1" aria-hidden="true">#</a> Hack</h2><p>输入 <code>x</code>, <code>y</code>, 只需满足 <code>func4(9, y) == x</code> 即可. 注意到运行过程中存在无符号比较, 稳妥的做法是令 <code>0 &lt;= y - 2 &lt;= 2</code>, 不妨取 <code>y = 2</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) disassemble
Dump of assembler code for function phase_4:
   0x00000000004015a9 &lt;+0&gt;:     sub    $0x18,%rsp
   0x00000000004015ad &lt;+4&gt;:     lea    0x8(%rsp),%rcx
   0x00000000004015b2 &lt;+9&gt;:     lea    0xc(%rsp),%rdx
   0x00000000004015b7 &lt;+14&gt;:    lea    0x1e77(%rip),%rsi        # 0x403435
   0x00000000004015be &lt;+21&gt;:    mov    $0x0,%eax
   0x00000000004015c3 &lt;+26&gt;:    callq  0x401130 &lt;__isoc99_sscanf@plt&gt;
   0x00000000004015c8 &lt;+31&gt;:    cmp    $0x2,%eax
   0x00000000004015cb &lt;+34&gt;:    jne    0x4015d9 &lt;phase_4+48&gt;
   0x00000000004015cd &lt;+36&gt;:    mov    0x8(%rsp),%eax
   0x00000000004015d1 &lt;+40&gt;:    sub    $0x2,%eax
   0x00000000004015d4 &lt;+43&gt;:    cmp    $0x2,%eax
   0x00000000004015d7 &lt;+46&gt;:    jbe    0x4015de &lt;phase_4+53&gt;
   0x00000000004015d9 &lt;+48&gt;:    callq  0x401b5c &lt;explode_bomb&gt;
   0x00000000004015de &lt;+53&gt;:    mov    0x8(%rsp),%esi
   0x00000000004015e2 &lt;+57&gt;:    mov    $0x9,%edi
   0x00000000004015e7 &lt;+62&gt;:    callq  0x401571 &lt;func4&gt;
=&gt; 0x00000000004015ec &lt;+67&gt;:    cmp    0xc(%rsp),%eax
   0x00000000004015f0 &lt;+71&gt;:    je     0x4015f7 &lt;phase_4+78&gt;
   0x00000000004015f2 &lt;+73&gt;:    callq  0x401b5c &lt;explode_bomb&gt;
   0x00000000004015f7 &lt;+78&gt;:    add    $0x18,%rsp
   0x00000000004015fb &lt;+82&gt;:    retq
End of assembler dump.
(gdb) info registers eax
eax            0xb0     176
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>176 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),c=[p];function i(l,o){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","index.html.vue"]]);export{u as default};
