import{_ as n,X as s,Y as a,a1 as e}from"./framework-9435e890.js";const p={},t=e(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>000000000040145e &lt;phase_2&gt;:
b0:
  40145e:	55                   	push   %rbp
  40145f:	53                   	push   %rbx
  401460:	48 83 ec 28          	sub    $0x28,%rsp
  401464:	48 89 e6             	mov    %rsp,%rsi
  401467:	e8 2c 07 00 00       	callq  401b98 &lt;read_six_numbers&gt;
  40146c:	83 3c 24 00          	cmpl   $0x0,(%rsp)
  401470:	75 07                	jne    401479 &lt;phase_2+0x1b&gt;
  401472:	83 7c 24 04 01       	cmpl   $0x1,0x4(%rsp)
  401477:	74 23                	je     40149c &lt;phase_2+0x3e&gt;
b1:
  401479:	e8 de 06 00 00       	callq  401b5c &lt;explode_bomb&gt;
  40147e:	66 90                	xchg   %ax,%ax
  401480:	eb 1a                	jmp    40149c &lt;phase_2+0x3e&gt;
b2:
  401482:	8b 43 f8             	mov    -0x8(%rbx),%eax
  401485:	03 43 fc             	add    -0x4(%rbx),%eax
  401488:	39 03                	cmp    %eax,(%rbx)
  40148a:	74 05                	je     401491 &lt;phase_2+0x33&gt;
  40148c:	e8 cb 06 00 00       	callq  401b5c &lt;explode_bomb&gt;
b3:
  401491:	48 83 c3 04          	add    $0x4,%rbx
  401495:	48 39 eb             	cmp    %rbp,%rbx
  401498:	75 e8                	jne    401482 &lt;phase_2+0x24&gt;
  40149a:	eb 0e                	jmp    4014aa &lt;phase_2+0x4c&gt;
b4:
  40149c:	48 89 e5             	mov    %rsp,%rbp
  40149f:	48 8d 5c 24 08       	lea    0x8(%rsp),%rbx
  4014a4:	48 83 c5 18          	add    $0x18,%rbp
  4014a8:	eb d8                	jmp    401482 &lt;phase_2+0x24&gt;
b5:
  4014aa:	48 83 c4 28          	add    $0x28,%rsp
  4014ae:	5b                   	pop    %rbx
  4014af:	5d                   	pop    %rbp
  4014b0:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token comment">// push rbp rbx</span>
  rsp <span class="token operator">-=</span> <span class="token number">0x28</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">read_six_numbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rsp<span class="token punctuation">)</span> <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> <span class="token number">0x4</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b4<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">nop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b4<span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">-</span> <span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 32-bit</span>
  rax <span class="token operator">+=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">-</span> <span class="token number">0x4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">==</span> rax<span class="token punctuation">)</span>      <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  rbx <span class="token operator">+=</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rbx <span class="token operator">!=</span> rbp<span class="token punctuation">)</span> <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
b4<span class="token operator">:</span>
  rbp <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  rbx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">;</span>
  rbp <span class="token operator">+=</span> <span class="token number">0x18</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
b5<span class="token operator">:</span>
  rsp <span class="token operator">+=</span> <span class="token number">0x28</span><span class="token punctuation">;</span>
  <span class="token comment">// pop rbx rbp</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_2</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> rsp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> rbx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> rbx <span class="token operator">!=</span> rsp <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rbx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rbx<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> rbx<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> rbx<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><ol><li>0</li><li>1</li><li>0 + 1 = 1</li><li>1 + 1 = 2</li><li>1 + 2 = 3</li><li>2 + 3 = 5</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 1 1 2 3 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","index.html.vue"]]);export{u as default};
