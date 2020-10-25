import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../styles/index.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="third_party/css/bootstrap.css" />  
    <script type="text/javascript" async  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=MML_HTMLorMML"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    
  </head>
  <body>
    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <header>
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            <h1> <small>Блог компании <span itemprop="author">Яндекс.</small>
            </h1>
            <H1>
              <span itemprop="name"> ЯНДЕКС.ПОЧТА: КАК МЫ ИЗМЕРЯЕМ СКОРОСТЬ ЗАГРУЗКИ И УЛУЧШАЕМ ЕЁ </span>
            </H1>
       
      </header>
 <article>   

    <main>
      <div class="description1" lang="ru">
    Если ваш сайт медленно грузится, вы рискуете тем, что люди не оценят ни то, 
    какой он красивый, ни то, какой он удобный. Никому не понравится, когда все 
    тормозит. Мы регулярно добавляем в Яндекс.Почту новую функциональность,
    иногда — исправляем ошибки, а это значит, у нас постоянно появляются новый  код </wbr> 
    и новая логика. Всё это напрямую влияет на скорость работы интерфейса.</br> 
    <small>
    Что мы измеряем
  </small>
    <ul>
    	Этапы первой загрузки:
    	<li id='news'>
        подготовка;
      </li>
    	<li id='news'>
    	  загрузка статики (HTTP-запрос и парсинг);
    	</li>
    	<li id='news'>
         исполнение модулей;
      </li>
    	<li id='news'>
         инициализация базовых объектов;
      </li>
    	<li id='news'>
         отрисовка.
      </li>
    </ul>
    
   
    
    <ul>   Этапы отрисовки любой страницы:
    
     <li id='news'>
    	подготовка к запросу на сервер;
    </li>
     <li id='news'>
    	запрос данных с сервера;
    </li>
     <li id='news'>
    	шаблонизация;
    </li>
    <li id='news'>
    	обновление DOM.
    </li>
  </ul>
  </br>
</div>
<div class="description2" lang="ru" style="display: inline-block;">
— «Ок, теперь у нас есть метрики, мы можем отправить их на сервер» - говорим мы
</br>— «Что же дальше?» - вопрошаете вы
</br>— «А давай построим график!» - отвечаем мы
</br>— «А что будем считать?» - уточняете вы
</br>
    Как вы знаете, медиана – это серединное, а не среднее значение в выборке.<wbr>
    Если у нас имеются числа 1, 2, 2, 3, 8, 10, 20, то медиана – 3, а среднее – 6,5.
    В общем случае медиана отлично показывает, сколько грузится средний пользователь.
    
    В случае ускорения или замедления медиана, конечно, изменится. Но она не может <wbr>
    рассказать, сколько пользователей ускорилось, а сколько замедлилось.
    
    <q translate="no">APDEX</q> – метрика, которая сразу говорит: хорошо или плохо. Метрика
    работает очень просто. Мы выбираем временной интервал <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mrow>             <mo>[</mo>            <mn>0</mn>           <mo>;</mo>             <mi>t</mi>            <mo>]</mo>         </mrow>
    </math>,такой, что если
    время показа страницы попало в него, то пользователь счастлив. Берем еще один
    интервал, <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mrow>             <mo>(</mo>            <mi>t</mi>           <mo>;</mo>             <mi>4t</mi>            <mo>]</mo>         </mrow>
    </math>,(в четыре раза больше первого), и считаем, что если страница
    показана за это время, то пользователь в целом удовлетворен скоростью работы,
    но уже не настолько счастлив. И применяем формулу:
     <math display="block" >
      <mfrac>
        <mfrac bevelled="true">
          <mrow>
            <mo>(</mo>
            <mi> кол-во счастливых пользователей </mi>
            
            <mo> + </mo>
            <mi> кол-во удовлетворенных </mi>
            <mo>)</mo>
          </mrow>
          <mrow>
            <mn> 2</mn>
          </mrow>
        </mfrac>
        <mrow> <mi>кол-во всех</mi> </mrow>
      </mfrac>
    </math>
    Получается значение от нуля до единицы, которое, видимо, лучше всего показывает,
    хорошо или плохо работает почта.
</div>
<div class="description1" lang="ru">
   <small> Как мы измеряем </small>
    Сейчас модуль обновления сам логирует все свои стадии, и можно легко понять
    причину замедления: медленнее стал отвечать сервер либо слишком долго
    выполняется JavaScript. Выглядит это примерно так:
  
    <pre translate="no"><code>
      this.timings['look-ma-im-start'] = Date.now();
      this.timings['look-ma-finish'] = Date.now();  </code></pre></div>
    <div class="description1" lang="ru">
    C помощью <code translate="no">Date.now()</code> мы получаем текущее время. Все тайминги собираются и при
    отправке рассчитываются. На этапах разница между “end” и “start” не считается,
    а все вычисления производятся в конце:
    <pre translate="no">
      <code>
      var totalTime = this.timings['look-ma-finish'] - 
      this.timings['look-ma-im-start'];                </code></pre>
      И на сервер прилетают подобные записи:
    <code>
    serverResponse=50&domUpdate=60
  </code>

   <small> Как мы ускоряем </small>
    
    Чтобы снизить время загрузки почты при выходе новых версий,
    мы уже делаем следующее:
    <ul>
    <li id='news'>
      включаем gzip;
    </li>
    <li id='news'>
     выставляем заголовки кэширования;
    </li>
    <li id='news'>
      фризим CSS, JS, шаблоны и картинки;
    </li >
    <li id='news'>
     используем CDN;
    </li>
    
    </ul>
    
    Мы подумали: «А что если хранить где-то старую версию файлов, а при выходе новой
    передавать только diff между ней и той, которая сохранена у пользователя?»
    В браузере же останется просто наложить патч на клиенте.
    
    На самое деле эта идея не нова. Уже существуют стандарты для HTTP — например,
    RFC 3229 «Delta encoding in HTTP» и «Google SDHC», — но по разным причинам они
    не получили должного распространения в браузерах и на серверах.
    
    Мы же решили сделать свой аналог на JS. Чтобы реализовать этот метод обновления,
    начали искать реализации diff на JS. На популярных хостингах кода нашли
    библиотеки:
    <pre translate="no">
    - VCDiff
    - google-diff-patch-match
    </pre>     Для окончательного выбора библиотеки нам нужно сравнить:
    <table class="mytable">
      <tbody>
        <thead>
          <th>Библиотека</th>
          <th>IE 9</th>
          <th>Opera 12</th>
        </tr>
        <tr>
          <td>VCDiff</td>
          <td>8</td>
          <td>5</td>
        </tr>
        <tr>
          <td>google diff</td>
          <td>1363</td>
          <td>76</td>
        </tr>
      </tbody>
    </table>
    После того как мы определились с библиотекой для диффа, нужно определиться с тем,
    где и как хранить статику на клиенте.
    
    Формат файла с патчами для проекта выглядит так:
    <pre translate="no"><code>
    [                             
        {                         
            "k": "jane.css",      
            "p": [patch],         
            "s": 4554             
        },                        
        {                         
            "k": "jane.css",      
            "p": [patch],         
            "s": 4554             
        }                         
    ]                             </code>
  </pre>

    То есть это обычный массив из объектов. Каждый объект — отдельный ресурс. У
    каждого объекта есть три свойства. k — названия ключа в localStorage для этого
    ресурса. p — патч для ресурса, который сгенерировал vcdiff. s — чексумма для
    ресурса актуальной версии, чтобы потом можно было проверить правильность
    наложения патча на клиенте. Чексумма вычисляется по алгоритму Флетчера.
</div>
      <code><div class="description3" translate='no' >Дано <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \varepsilon ,\;x_{0}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <mi>ε<!-- ε --></mi>
              <mo>,</mo>
              <mspace width="thickmathspace"></mspace>
              <msub>
                <mi>x</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mn>0</mn>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle \varepsilon ,\;x_{0}}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/841b174ecad9b3a8f10e6e84c25342534068aa1f" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:5.147ex; height:2.009ex;" alt="\varepsilon ,\;x_{0}"></span><br>
      Инициализировать <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{0}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <msub>
                <mi>C</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mn>0</mn>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle C_{0}}</annotation>
        </semantics>
      </math></span><span style="display: inline-block; position: relative; width: 1.26em; height: 0px; font-size: 98%;"><span style="position: absolute; clip: rect(1.417em, 1001.26em, 2.318em, -1000em); top: -2.127em; left: 0em;"><span class="mrow" id="MathJax-Span-47"><span class="texatom" id="MathJax-Span-48"><span class="mrow" id="MathJax-Span-49"><span class="mstyle" id="MathJax-Span-50"><span class="mrow" id="MathJax-Span-51"><span class="msub" id="MathJax-Span-52"><span style="display: inline-block; position: relative; width: 1.26em; height: 0px;"><span style="position: absolute; clip: rect(3.29em, 1000.89em, 4.026em, -1000em); top: -3.999em; left: 0em;"><span class="mi" id="MathJax-Span-53" style="font-family: MathJax_Math; font-style: italic;">H<span style="display: inline-block; overflow: hidden; height: 1px; width: 0.057em;"></span></span><span style="display: inline-block; width: 0px; height: 3.999em;"></span></span><span style="position: absolute; top: -3.849em; left: 0.831em;"><span class="texatom" id="MathJax-Span-54"><span class="mrow" id="MathJax-Span-55"><span class="mn" id="MathJax-Span-56" style="font-size: 70.7%; font-family: MathJax_Main;">0</span></span></span><span style="display: inline-block; width: 0px; height: 3.999em;"></span></span></span></span></span></span></span></span></span><span style="display: inline-block; width: 0px; height: 2.127em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.171em; border-left: 0px solid; width: 0px; height: 0.849em;"></span></span><br>
      <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle k=0}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <mi>k</mi>
              <mo>=</mo>
              <mn>0</mn>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle k=0}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/6307c8a99dad7d0bcb712352ae0a748bd99a038b" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.338ex; width:5.472ex; height:2.176ex;" alt="k = 0"></span><br>
      <b>while</b> <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle ||\nabla f_{k}||>\varepsilon }">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <mrow class="MJX-TeXAtom-ORD">
                <mo stretchy="false">|</mo>
              </mrow>
              <mrow class="MJX-TeXAtom-ORD">
                <mo stretchy="false">|</mo>
              </mrow>
              <mi mathvariant="normal">∇<!-- ∇ --></mi>
              <msub>
                <mi>f</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
              <mrow class="MJX-TeXAtom-ORD">
                <mo stretchy="false">|</mo>
              </mrow>
              <mrow class="MJX-TeXAtom-ORD">
                <mo stretchy="false">|</mo>
              </mrow>
              <mo>&gt;</mo>
              <mi>ε<!-- ε --></mi>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle ||\nabla f_{k}||&gt;\varepsilon }</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/8e85ce0deb65169ea7c6d4b0603037c100fe5d0d" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:10.933ex; height:2.843ex;" alt="||\nabla f_{k}||>\varepsilon "></span><br>
      &emsp; &emsp; найти направление <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle p_{k}=-C_{k}\nabla f_{k}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <msub>
                <mi>p</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
              <mo>=</mo>
              <mo>−<!-- − --></mo>
              <msub>
                <mi>C</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
              <mi mathvariant="normal">∇<!-- ∇ --></mi>
              <msub>
                <mi>f</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle p_{k}=-C_{k}\nabla f_{k}}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e749b989ed667b9416a5503dfa902901aecab451" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; margin-left: -0.089ex; width:14.169ex; height:2.509ex;" alt="p_{k}=-C_{k}\nabla f_{k}"></span><br>
      &emsp; &emsp; вычислить <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle x_{k+1}=x_{k}+\alpha _{k}p_{k}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <msub>
                <mi>x</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                  <mo>+</mo>
                  <mn>1</mn>
                </mrow>
              </msub>
              <mo>=</mo>
              <msub>
                <mi>x</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>α<!-- α --></mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
              <msub>
                <mi>p</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle x_{k+1}=x_{k}+\alpha _{k}p_{k}}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/272c45d501ed6ee3f1772286189acb74f9660f69" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:17.711ex; height:2.343ex;" alt="x_{{k+1}}=x_{k}+\alpha _{k}p_{k}"></span>, <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle \alpha _{k}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <msub>
                <mi>α<!-- α --></mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle \alpha _{k}}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/717fd9a74d91add9739563c16ac357ce33924860" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.576ex; height:2.009ex;" alt="\alpha _{k}"></span> удовлетворяет условиям Вольфе <br>
      &emsp; &emsp; обозначить <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle s_{k}=x_{k+1}-x_{k}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <msub>
                <mi>s</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
              <mo>=</mo>
              <msub>
                <mi>x</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                  <mo>+</mo>
                  <mn>1</mn>
                </mrow>
              </msub>
              <mo>−<!-- − --></mo>
              <msub>
                <mi>x</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle s_{k}=x_{k+1}-x_{k}}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/fbdd7312f50e7d8bcf5737918fbf4c7612e2f515" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:15.055ex; height:2.343ex;" alt="s_{k}=x_{{k+1}}-x_{{k}}"></span> и <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle y_{k}=\nabla f_{k+1}-\nabla f_{k}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <msub>
                <mi>y</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
              <mo>=</mo>
              <mi mathvariant="normal">∇<!-- ∇ --></mi>
              <msub>
                <mi>f</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                  <mo>+</mo>
                  <mn>1</mn>
                </mrow>
              </msub>
              <mo>−<!-- − --></mo>
              <mi mathvariant="normal">∇<!-- ∇ --></mi>
              <msub>
                <mi>f</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle y_{k}=\nabla f_{k+1}-\nabla f_{k}}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0b09f7f989145bf135c24b20226503f6dbb00578" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:18.595ex; height:2.509ex;" alt="y_{k}=\nabla f_{{k+1}}-\nabla f_{k}"></span><br>
      &emsp; &emsp; вычислить <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{k+1}}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <msub>
                <mi>C</mi>
                <mrow class="MJX-TeXAtom-ORD">
                  <mi>k</mi>
                  <mo>+</mo>
                  <mn>1</mn>
                </mrow>
              </msub>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle C_{k+1}}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/4ab76165ee52a0638cb2ff277eecc1d5daadcaac" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:4.851ex; height:2.509ex;" alt="C_{{k+1}}"></span><br>
      &emsp; &emsp; <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle k=k+1}">
        <semantics>
          <mrow class="MJX-TeXAtom-ORD">
            <mstyle displaystyle="true" scriptlevel="0">
              <mi>k</mi>
              <mo>=</mo>
              <mi>k</mi>
              <mo>+</mo>
              <mn>1</mn>
            </mstyle>
          </mrow>
          <annotation encoding="application/x-tex">{\displaystyle k=k+1}</annotation>
        </semantics>
      </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7daac515060e17c7b2b5ef6ea21ebe7fba066a93" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.505ex; width:9.524ex; height:2.343ex;" alt="k=k+1"></span><br>
      <b>end</b><br>
      </p>
      </div></code>
      <div class="description1" lang="ru">
    Алгоритм Бройдена — Флетчера — Гольдфарба — Шанно (BFGS)
    — итерационный метод численной оптимизации, предназначенный для
    нахождения локального максимума/минимума нелинейного функционала
    без ограничений.
    
    Почему именно алгоритм Флетчера, а не другие популярные алгоритмы вроде:
    CRC16/32 - алгоритм нахождения контрольной суммы, предназначенный для проверки
    целостности данных
    md5 - 128-битный алгоритм хеширования. Предназначен для создания «отпечатков»
    или дайджестов сообщения произвольной длины и последующей проверки
    их подлинности.
    Потому что он быстрый, компактный и легок в реализации.
    </br>
    <small>Итог</small>
    Фактически мы экономим 80-90% трафика. Размер загружаемой статитки в байтах:
      </div>
      <div class="description1" lang="ru">
      <table class="mytable">
        <tbody>
          <thead>
            <th>Релиз </th>
            <th>С патчем </th>
            <th>Без патча</th>
          </tr>
          <tr>
            <td> 7.7.20</td>
            <td>397 </td>
            <td>174 549</td>
          </tr>
          <tr>
            <td>7.7.21</td>
            <td>383 </td>
            <td> 53 995</td>
          </tr>
          <tr>
            <td> 7.7.22 </td>
            <td> 483   </td>
            <td>3 995</td>
          </tr>
        </tbody>
      </table>
 
      
    Автор: @doochik
    С++ разработик
    Электронная почта: (doochik@yandex-team.ru)
    Компания: Яндекс
  </div>
</div>    
  </main>

</article>
    </main>
  );
}

export default Index;
