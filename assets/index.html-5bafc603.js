import{_ as n,X as s,Y as a,a1 as e}from"./framework-9435e890.js";const t={},i=e(`<div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401893 &lt;strings_not_equal&gt;:
  401893:	41 54                	push   %r12
  401895:	55                   	push   %rbp
  401896:	53                   	push   %rbx
  401897:	48 89 fb             	mov    %rdi,%rbx
  40189a:	48 89 f5             	mov    %rsi,%rbp
  40189d:	e8 d4 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018a2:	41 89 c4             	mov    %eax,%r12d
  4018a5:	48 89 ef             	mov    %rbp,%rdi
  4018a8:	e8 c9 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018ad:	ba 01 00 00 00       	mov    $0x1,%edx
  4018b2:	41 39 c4             	cmp    %eax,%r12d
  4018b5:	75 3c                	jne    4018f3 &lt;strings_not_equal+0x60&gt;
  4018b7:	0f b6 03             	movzbl (%rbx),%eax
  4018ba:	84 c0                	test   %al,%al
  4018bc:	74 22                	je     4018e0 &lt;strings_not_equal+0x4d&gt;
  4018be:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c1:	74 07                	je     4018ca &lt;strings_not_equal+0x37&gt;
  4018c3:	eb 22                	jmp    4018e7 &lt;strings_not_equal+0x54&gt;
  4018c5:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c8:	75 24                	jne    4018ee &lt;strings_not_equal+0x5b&gt;
  4018ca:	48 83 c3 01          	add    $0x1,%rbx
  4018ce:	48 83 c5 01          	add    $0x1,%rbp
  4018d2:	0f b6 03             	movzbl (%rbx),%eax
  4018d5:	84 c0                	test   %al,%al
  4018d7:	75 ec                	jne    4018c5 &lt;strings_not_equal+0x32&gt;
  4018d9:	ba 00 00 00 00       	mov    $0x0,%edx
  4018de:	eb 13                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
  4018e0:	ba 00 00 00 00       	mov    $0x0,%edx
  4018e5:	eb 0c                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
  4018e7:	ba 01 00 00 00       	mov    $0x1,%edx
  4018ec:	eb 05                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
  4018ee:	ba 01 00 00 00       	mov    $0x1,%edx
  4018f3:	89 d0                	mov    %edx,%eax
  4018f5:	5b                   	pop    %rbx
  4018f6:	5d                   	pop    %rbp
  4018f7:	41 5c                	pop    %r12
  4018f9:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分割-basicblock" tabindex="-1"><a class="header-anchor" href="#分割-basicblock" aria-hidden="true">#</a> 分割 <code>BasicBlock</code></h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401893 &lt;strings_not_equal&gt;:
b0:
  401893:	41 54                	push   %r12
  401895:	55                   	push   %rbp
  401896:	53                   	push   %rbx
  401897:	48 89 fb             	mov    %rdi,%rbx
  40189a:	48 89 f5             	mov    %rsi,%rbp
  40189d:	e8 d4 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018a2:	41 89 c4             	mov    %eax,%r12d
  4018a5:	48 89 ef             	mov    %rbp,%rdi
  4018a8:	e8 c9 ff ff ff       	callq  401876 &lt;string_length&gt;
  4018ad:	ba 01 00 00 00       	mov    $0x1,%edx
  4018b2:	41 39 c4             	cmp    %eax,%r12d
  4018b5:	75 3c                	jne    4018f3 &lt;strings_not_equal+0x60&gt;
  4018b7:	0f b6 03             	movzbl (%rbx),%eax
  4018ba:	84 c0                	test   %al,%al
  4018bc:	74 22                	je     4018e0 &lt;strings_not_equal+0x4d&gt;
  4018be:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c1:	74 07                	je     4018ca &lt;strings_not_equal+0x37&gt;
  4018c3:	eb 22                	jmp    4018e7 &lt;strings_not_equal+0x54&gt;
b1:
  4018c5:	3a 45 00             	cmp    0x0(%rbp),%al
  4018c8:	75 24                	jne    4018ee &lt;strings_not_equal+0x5b&gt;
b2:
  4018ca:	48 83 c3 01          	add    $0x1,%rbx
  4018ce:	48 83 c5 01          	add    $0x1,%rbp
  4018d2:	0f b6 03             	movzbl (%rbx),%eax
  4018d5:	84 c0                	test   %al,%al
  4018d7:	75 ec                	jne    4018c5 &lt;strings_not_equal+0x32&gt;
  4018d9:	ba 00 00 00 00       	mov    $0x0,%edx
  4018de:	eb 13                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
b3:
  4018e0:	ba 00 00 00 00       	mov    $0x0,%edx
  4018e5:	eb 0c                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
b4:
  4018e7:	ba 01 00 00 00       	mov    $0x1,%edx
  4018ec:	eb 05                	jmp    4018f3 &lt;strings_not_equal+0x60&gt;
b5:
  4018ee:	ba 01 00 00 00       	mov    $0x1,%edx
b6:
  4018f3:	89 d0                	mov    %edx,%eax
  4018f5:	5b                   	pop    %rbx
  4018f6:	5d                   	pop    %rbp
  4018f7:	41 5c                	pop    %r12
  4018f9:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">strings_not_equal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token comment">// push r12 rbp rbx</span>
  rbx <span class="token operator">=</span> rdi<span class="token punctuation">;</span>
  rbp <span class="token operator">=</span> rsi<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r12 <span class="token operator">=</span> rax<span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rdi <span class="token operator">=</span> rbp<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>         <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>r12 <span class="token operator">!=</span> rax<span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token operator">*</span>rbx<span class="token punctuation">;</span>    <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> <span class="token operator">*</span>rbp<span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b4<span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token operator">*</span>rbp<span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  <span class="token operator">++</span>rbx<span class="token punctuation">;</span>
  <span class="token operator">++</span>rbp<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token operator">*</span>rbx<span class="token punctuation">;</span>    <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 8-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
b4<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
b5<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b6<span class="token operator">:</span>
  rax <span class="token operator">=</span> rdx<span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token comment">// pop rbx rbp r12</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xxxxxxxxxx5-1int-string-length-char-rdi-2-char-rdx-rdi-3-while-rdx-rdi-4-return-rdx-rdi-rax5-c" tabindex="-1"><a class="header-anchor" href="#xxxxxxxxxx5-1int-string-length-char-rdi-2-char-rdx-rdi-3-while-rdx-rdi-4-return-rdx-rdi-rax5-c" aria-hidden="true">#</a> xxxxxxxxxx5 1int string_length(char* rdi) {2  char* rdx = rdi;3  while (*rdx) ++rdi;4  return rdx - rdi;  // rax5}c</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">strings_not_equal</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> rsi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">string_length</span><span class="token punctuation">(</span>rdi<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token function">string_length</span><span class="token punctuation">(</span>rsi<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>rbx <span class="token operator">=</span> rdi<span class="token punctuation">,</span> <span class="token operator">*</span>rbp <span class="token operator">=</span> rsi<span class="token punctuation">;</span> <span class="token operator">*</span>rbx<span class="token punctuation">;</span> <span class="token operator">++</span>rbx<span class="token punctuation">,</span> <span class="token operator">++</span>rbp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">!=</span> <span class="token operator">*</span>rbp<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[i];function p(c,o){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
