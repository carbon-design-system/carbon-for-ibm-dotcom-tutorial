/*! For license information please see vendors~global~41357eb7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(module,__webpack_exports__,__webpack_require__){"use strict";var decorate=__webpack_require__(1),lit_element=__webpack_require__(0),class_map=__webpack_require__(9),settings=__webpack_require__(3),settings_settings=__webpack_require__(2),stable_selector=__webpack_require__(7),image_css=Object(lit_element.b)(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,Helvetica Neue,Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);line-height:var(--cds-productive-heading-06-line-height,1.199);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);line-height:var(--cds-productive-heading-05-line-height,1.25);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);line-height:var(--cds-productive-heading-04-line-height,1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);line-height:var(--cds-productive-heading-03-line-height,1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);line-height:var(--cds-body-long-02-line-height,1.5);letter-spacing:var(--cds-body-long-02-letter-spacing,0)}a{color:#0f62fe}em{font-style:italic}@-webkit-keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.bx--text-truncate--end,.bx--text-truncate--front{display:inline-block;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--text-truncate--front{direction:rtl}.bx--grid{margin-right:auto;margin-left:auto;max-width:99rem;padding-right:1rem;padding-left:1rem}@media (min-width:42rem){.bx--grid{padding-right:2rem;padding-left:2rem}}@media (min-width:99rem){.bx--grid{padding-right:2.5rem;padding-left:2.5rem}}@media (min-width:99rem){.bx--grid--full-width{max-width:100%}}.bx--row{display:flex;flex-wrap:wrap;margin-right:-1rem;margin-left:-1rem}.bx--col-padding,.bx--row-padding [class*=bx--col]{padding-top:1rem;padding-bottom:1rem}.bx--grid--condensed [class*=bx--col]{padding-top:.03125rem;padding-bottom:.03125rem}.bx--col{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col,.bx--row--condensed .bx--col{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col,.bx--row--narrow .bx--col{padding-right:1rem;padding-left:0}.bx--col-sm-0{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-sm-0,.bx--row--condensed .bx--col-sm-0{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-sm-0,.bx--row--narrow .bx--col-sm-0{padding-right:1rem;padding-left:0}.bx--col-sm-1{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-sm-1,.bx--row--condensed .bx--col-sm-1{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-sm-1,.bx--row--narrow .bx--col-sm-1{padding-right:1rem;padding-left:0}.bx--col-sm-2{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-sm-2,.bx--row--condensed .bx--col-sm-2{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-sm-2,.bx--row--narrow .bx--col-sm-2{padding-right:1rem;padding-left:0}.bx--col-sm-3{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-sm-3,.bx--row--condensed .bx--col-sm-3{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-sm-3,.bx--row--narrow .bx--col-sm-3{padding-right:1rem;padding-left:0}.bx--col-sm-4{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-sm-4,.bx--row--condensed .bx--col-sm-4{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-sm-4,.bx--row--narrow .bx--col-sm-4{padding-right:1rem;padding-left:0}.bx--col-sm,.bx--col-sm--auto{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-sm,.bx--grid--condensed .bx--col-sm--auto,.bx--row--condensed .bx--col-sm,.bx--row--condensed .bx--col-sm--auto{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-sm,.bx--grid--narrow .bx--col-sm--auto,.bx--row--narrow .bx--col-sm,.bx--row--narrow .bx--col-sm--auto{padding-right:1rem;padding-left:0}.bx--col,.bx--col-sm{max-width:100%;flex-basis:0;flex-grow:1}.bx--col--auto,.bx--col-sm--auto{width:auto;max-width:100%;flex:1 0 0%}.bx--col-sm-0{display:none}.bx--col-sm-1{display:block;max-width:25%;flex:0 0 25%}.bx--col-sm-2{display:block;max-width:50%;flex:0 0 50%}.bx--col-sm-3{display:block;max-width:75%;flex:0 0 75%}.bx--col-sm-4{display:block;max-width:100%;flex:0 0 100%}.bx--offset-sm-0{margin-left:0}.bx--offset-sm-1{margin-left:25%}.bx--offset-sm-2{margin-left:50%}.bx--offset-sm-3{margin-left:75%}.bx--col-md-0{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-0,.bx--row--condensed .bx--col-md-0{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-0,.bx--row--narrow .bx--col-md-0{padding-right:1rem;padding-left:0}.bx--col-md-1{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-1,.bx--row--condensed .bx--col-md-1{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-1,.bx--row--narrow .bx--col-md-1{padding-right:1rem;padding-left:0}.bx--col-md-2{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-2,.bx--row--condensed .bx--col-md-2{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-2,.bx--row--narrow .bx--col-md-2{padding-right:1rem;padding-left:0}.bx--col-md-3{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-3,.bx--row--condensed .bx--col-md-3{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-3,.bx--row--narrow .bx--col-md-3{padding-right:1rem;padding-left:0}.bx--col-md-4{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-4,.bx--row--condensed .bx--col-md-4{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-4,.bx--row--narrow .bx--col-md-4{padding-right:1rem;padding-left:0}.bx--col-md-5{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-5,.bx--row--condensed .bx--col-md-5{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-5,.bx--row--narrow .bx--col-md-5{padding-right:1rem;padding-left:0}.bx--col-md-6{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-6,.bx--row--condensed .bx--col-md-6{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-6,.bx--row--narrow .bx--col-md-6{padding-right:1rem;padding-left:0}.bx--col-md-7{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-7,.bx--row--condensed .bx--col-md-7{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-7,.bx--row--narrow .bx--col-md-7{padding-right:1rem;padding-left:0}.bx--col-md-8{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md-8,.bx--row--condensed .bx--col-md-8{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md-8,.bx--row--narrow .bx--col-md-8{padding-right:1rem;padding-left:0}.bx--col-md,.bx--col-md--auto{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-md,.bx--grid--condensed .bx--col-md--auto,.bx--row--condensed .bx--col-md,.bx--row--condensed .bx--col-md--auto{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-md,.bx--grid--narrow .bx--col-md--auto,.bx--row--narrow .bx--col-md,.bx--row--narrow .bx--col-md--auto{padding-right:1rem;padding-left:0}@media (min-width:42rem){.bx--col,.bx--col-md{max-width:100%;flex-basis:0;flex-grow:1}.bx--col--auto,.bx--col-md--auto{width:auto;max-width:100%;flex:1 0 0%}.bx--col-md-0{display:none}.bx--col-md-1{display:block;max-width:12.5%;flex:0 0 12.5%}.bx--col-md-2{display:block;max-width:25%;flex:0 0 25%}.bx--col-md-3{display:block;max-width:37.5%;flex:0 0 37.5%}.bx--col-md-4{display:block;max-width:50%;flex:0 0 50%}.bx--col-md-5{display:block;max-width:62.5%;flex:0 0 62.5%}.bx--col-md-6{display:block;max-width:75%;flex:0 0 75%}.bx--col-md-7{display:block;max-width:87.5%;flex:0 0 87.5%}.bx--col-md-8{display:block;max-width:100%;flex:0 0 100%}.bx--offset-md-0{margin-left:0}.bx--offset-md-1{margin-left:12.5%}.bx--offset-md-2{margin-left:25%}.bx--offset-md-3{margin-left:37.5%}.bx--offset-md-4{margin-left:50%}.bx--offset-md-5{margin-left:62.5%}.bx--offset-md-6{margin-left:75%}.bx--offset-md-7{margin-left:87.5%}}.bx--col-lg-0{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-0,.bx--row--condensed .bx--col-lg-0{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-0,.bx--row--narrow .bx--col-lg-0{padding-right:1rem;padding-left:0}.bx--col-lg-1{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-1,.bx--row--condensed .bx--col-lg-1{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-1,.bx--row--narrow .bx--col-lg-1{padding-right:1rem;padding-left:0}.bx--col-lg-2{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-2,.bx--row--condensed .bx--col-lg-2{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-2,.bx--row--narrow .bx--col-lg-2{padding-right:1rem;padding-left:0}.bx--col-lg-3{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-3,.bx--row--condensed .bx--col-lg-3{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-3,.bx--row--narrow .bx--col-lg-3{padding-right:1rem;padding-left:0}.bx--col-lg-4{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-4,.bx--row--condensed .bx--col-lg-4{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-4,.bx--row--narrow .bx--col-lg-4{padding-right:1rem;padding-left:0}.bx--col-lg-5{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-5,.bx--row--condensed .bx--col-lg-5{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-5,.bx--row--narrow .bx--col-lg-5{padding-right:1rem;padding-left:0}.bx--col-lg-6{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-6,.bx--row--condensed .bx--col-lg-6{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-6,.bx--row--narrow .bx--col-lg-6{padding-right:1rem;padding-left:0}.bx--col-lg-7{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-7,.bx--row--condensed .bx--col-lg-7{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-7,.bx--row--narrow .bx--col-lg-7{padding-right:1rem;padding-left:0}.bx--col-lg-8{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-8,.bx--row--condensed .bx--col-lg-8{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-8,.bx--row--narrow .bx--col-lg-8{padding-right:1rem;padding-left:0}.bx--col-lg-9{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-9,.bx--row--condensed .bx--col-lg-9{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-9,.bx--row--narrow .bx--col-lg-9{padding-right:1rem;padding-left:0}.bx--col-lg-10{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-10,.bx--row--condensed .bx--col-lg-10{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-10,.bx--row--narrow .bx--col-lg-10{padding-right:1rem;padding-left:0}.bx--col-lg-11{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-11,.bx--row--condensed .bx--col-lg-11{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-11,.bx--row--narrow .bx--col-lg-11{padding-right:1rem;padding-left:0}.bx--col-lg-12{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-12,.bx--row--condensed .bx--col-lg-12{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-12,.bx--row--narrow .bx--col-lg-12{padding-right:1rem;padding-left:0}.bx--col-lg-13{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-13,.bx--row--condensed .bx--col-lg-13{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-13,.bx--row--narrow .bx--col-lg-13{padding-right:1rem;padding-left:0}.bx--col-lg-14{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-14,.bx--row--condensed .bx--col-lg-14{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-14,.bx--row--narrow .bx--col-lg-14{padding-right:1rem;padding-left:0}.bx--col-lg-15{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-15,.bx--row--condensed .bx--col-lg-15{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-15,.bx--row--narrow .bx--col-lg-15{padding-right:1rem;padding-left:0}.bx--col-lg-16{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg-16,.bx--row--condensed .bx--col-lg-16{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg-16,.bx--row--narrow .bx--col-lg-16{padding-right:1rem;padding-left:0}.bx--col-lg,.bx--col-lg--auto{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-lg,.bx--grid--condensed .bx--col-lg--auto,.bx--row--condensed .bx--col-lg,.bx--row--condensed .bx--col-lg--auto{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-lg,.bx--grid--narrow .bx--col-lg--auto,.bx--row--narrow .bx--col-lg,.bx--row--narrow .bx--col-lg--auto{padding-right:1rem;padding-left:0}@media (min-width:66rem){.bx--col,.bx--col-lg{max-width:100%;flex-basis:0;flex-grow:1}.bx--col--auto,.bx--col-lg--auto{width:auto;max-width:100%;flex:1 0 0%}.bx--col-lg-0{display:none}.bx--col-lg-1{display:block;max-width:6.25%;flex:0 0 6.25%}.bx--col-lg-2{display:block;max-width:12.5%;flex:0 0 12.5%}.bx--col-lg-3{display:block;max-width:18.75%;flex:0 0 18.75%}.bx--col-lg-4{display:block;max-width:25%;flex:0 0 25%}.bx--col-lg-5{display:block;max-width:31.25%;flex:0 0 31.25%}.bx--col-lg-6{display:block;max-width:37.5%;flex:0 0 37.5%}.bx--col-lg-7{display:block;max-width:43.75%;flex:0 0 43.75%}.bx--col-lg-8{display:block;max-width:50%;flex:0 0 50%}.bx--col-lg-9{display:block;max-width:56.25%;flex:0 0 56.25%}.bx--col-lg-10{display:block;max-width:62.5%;flex:0 0 62.5%}.bx--col-lg-11{display:block;max-width:68.75%;flex:0 0 68.75%}.bx--col-lg-12{display:block;max-width:75%;flex:0 0 75%}.bx--col-lg-13{display:block;max-width:81.25%;flex:0 0 81.25%}.bx--col-lg-14{display:block;max-width:87.5%;flex:0 0 87.5%}.bx--col-lg-15{display:block;max-width:93.75%;flex:0 0 93.75%}.bx--col-lg-16{display:block;max-width:100%;flex:0 0 100%}.bx--offset-lg-0{margin-left:0}.bx--offset-lg-1{margin-left:6.25%}.bx--offset-lg-2{margin-left:12.5%}.bx--offset-lg-3{margin-left:18.75%}.bx--offset-lg-4{margin-left:25%}.bx--offset-lg-5{margin-left:31.25%}.bx--offset-lg-6{margin-left:37.5%}.bx--offset-lg-7{margin-left:43.75%}.bx--offset-lg-8{margin-left:50%}.bx--offset-lg-9{margin-left:56.25%}.bx--offset-lg-10{margin-left:62.5%}.bx--offset-lg-11{margin-left:68.75%}.bx--offset-lg-12{margin-left:75%}.bx--offset-lg-13{margin-left:81.25%}.bx--offset-lg-14{margin-left:87.5%}.bx--offset-lg-15{margin-left:93.75%}}.bx--col-xlg-0{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-0,.bx--row--condensed .bx--col-xlg-0{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-0,.bx--row--narrow .bx--col-xlg-0{padding-right:1rem;padding-left:0}.bx--col-xlg-1{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-1,.bx--row--condensed .bx--col-xlg-1{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-1,.bx--row--narrow .bx--col-xlg-1{padding-right:1rem;padding-left:0}.bx--col-xlg-2{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-2,.bx--row--condensed .bx--col-xlg-2{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-2,.bx--row--narrow .bx--col-xlg-2{padding-right:1rem;padding-left:0}.bx--col-xlg-3{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-3,.bx--row--condensed .bx--col-xlg-3{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-3,.bx--row--narrow .bx--col-xlg-3{padding-right:1rem;padding-left:0}.bx--col-xlg-4{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-4,.bx--row--condensed .bx--col-xlg-4{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-4,.bx--row--narrow .bx--col-xlg-4{padding-right:1rem;padding-left:0}.bx--col-xlg-5{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-5,.bx--row--condensed .bx--col-xlg-5{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-5,.bx--row--narrow .bx--col-xlg-5{padding-right:1rem;padding-left:0}.bx--col-xlg-6{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-6,.bx--row--condensed .bx--col-xlg-6{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-6,.bx--row--narrow .bx--col-xlg-6{padding-right:1rem;padding-left:0}.bx--col-xlg-7{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-7,.bx--row--condensed .bx--col-xlg-7{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-7,.bx--row--narrow .bx--col-xlg-7{padding-right:1rem;padding-left:0}.bx--col-xlg-8{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-8,.bx--row--condensed .bx--col-xlg-8{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-8,.bx--row--narrow .bx--col-xlg-8{padding-right:1rem;padding-left:0}.bx--col-xlg-9{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-9,.bx--row--condensed .bx--col-xlg-9{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-9,.bx--row--narrow .bx--col-xlg-9{padding-right:1rem;padding-left:0}.bx--col-xlg-10{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-10,.bx--row--condensed .bx--col-xlg-10{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-10,.bx--row--narrow .bx--col-xlg-10{padding-right:1rem;padding-left:0}.bx--col-xlg-11{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-11,.bx--row--condensed .bx--col-xlg-11{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-11,.bx--row--narrow .bx--col-xlg-11{padding-right:1rem;padding-left:0}.bx--col-xlg-12{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-12,.bx--row--condensed .bx--col-xlg-12{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-12,.bx--row--narrow .bx--col-xlg-12{padding-right:1rem;padding-left:0}.bx--col-xlg-13{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-13,.bx--row--condensed .bx--col-xlg-13{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-13,.bx--row--narrow .bx--col-xlg-13{padding-right:1rem;padding-left:0}.bx--col-xlg-14{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-14,.bx--row--condensed .bx--col-xlg-14{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-14,.bx--row--narrow .bx--col-xlg-14{padding-right:1rem;padding-left:0}.bx--col-xlg-15{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-15,.bx--row--condensed .bx--col-xlg-15{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-15,.bx--row--narrow .bx--col-xlg-15{padding-right:1rem;padding-left:0}.bx--col-xlg-16{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg-16,.bx--row--condensed .bx--col-xlg-16{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg-16,.bx--row--narrow .bx--col-xlg-16{padding-right:1rem;padding-left:0}.bx--col-xlg,.bx--col-xlg--auto{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-xlg,.bx--grid--condensed .bx--col-xlg--auto,.bx--row--condensed .bx--col-xlg,.bx--row--condensed .bx--col-xlg--auto{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-xlg,.bx--grid--narrow .bx--col-xlg--auto,.bx--row--narrow .bx--col-xlg,.bx--row--narrow .bx--col-xlg--auto{padding-right:1rem;padding-left:0}@media (min-width:82rem){.bx--col,.bx--col-xlg{max-width:100%;flex-basis:0;flex-grow:1}.bx--col--auto,.bx--col-xlg--auto{width:auto;max-width:100%;flex:1 0 0%}.bx--col-xlg-0{display:none}.bx--col-xlg-1{display:block;max-width:6.25%;flex:0 0 6.25%}.bx--col-xlg-2{display:block;max-width:12.5%;flex:0 0 12.5%}.bx--col-xlg-3{display:block;max-width:18.75%;flex:0 0 18.75%}.bx--col-xlg-4{display:block;max-width:25%;flex:0 0 25%}.bx--col-xlg-5{display:block;max-width:31.25%;flex:0 0 31.25%}.bx--col-xlg-6{display:block;max-width:37.5%;flex:0 0 37.5%}.bx--col-xlg-7{display:block;max-width:43.75%;flex:0 0 43.75%}.bx--col-xlg-8{display:block;max-width:50%;flex:0 0 50%}.bx--col-xlg-9{display:block;max-width:56.25%;flex:0 0 56.25%}.bx--col-xlg-10{display:block;max-width:62.5%;flex:0 0 62.5%}.bx--col-xlg-11{display:block;max-width:68.75%;flex:0 0 68.75%}.bx--col-xlg-12{display:block;max-width:75%;flex:0 0 75%}.bx--col-xlg-13{display:block;max-width:81.25%;flex:0 0 81.25%}.bx--col-xlg-14{display:block;max-width:87.5%;flex:0 0 87.5%}.bx--col-xlg-15{display:block;max-width:93.75%;flex:0 0 93.75%}.bx--col-xlg-16{display:block;max-width:100%;flex:0 0 100%}.bx--offset-xlg-0{margin-left:0}.bx--offset-xlg-1{margin-left:6.25%}.bx--offset-xlg-2{margin-left:12.5%}.bx--offset-xlg-3{margin-left:18.75%}.bx--offset-xlg-4{margin-left:25%}.bx--offset-xlg-5{margin-left:31.25%}.bx--offset-xlg-6{margin-left:37.5%}.bx--offset-xlg-7{margin-left:43.75%}.bx--offset-xlg-8{margin-left:50%}.bx--offset-xlg-9{margin-left:56.25%}.bx--offset-xlg-10{margin-left:62.5%}.bx--offset-xlg-11{margin-left:68.75%}.bx--offset-xlg-12{margin-left:75%}.bx--offset-xlg-13{margin-left:81.25%}.bx--offset-xlg-14{margin-left:87.5%}.bx--offset-xlg-15{margin-left:93.75%}}.bx--col-max-0{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-0,.bx--row--condensed .bx--col-max-0{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-0,.bx--row--narrow .bx--col-max-0{padding-right:1rem;padding-left:0}.bx--col-max-1{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-1,.bx--row--condensed .bx--col-max-1{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-1,.bx--row--narrow .bx--col-max-1{padding-right:1rem;padding-left:0}.bx--col-max-2{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-2,.bx--row--condensed .bx--col-max-2{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-2,.bx--row--narrow .bx--col-max-2{padding-right:1rem;padding-left:0}.bx--col-max-3{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-3,.bx--row--condensed .bx--col-max-3{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-3,.bx--row--narrow .bx--col-max-3{padding-right:1rem;padding-left:0}.bx--col-max-4{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-4,.bx--row--condensed .bx--col-max-4{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-4,.bx--row--narrow .bx--col-max-4{padding-right:1rem;padding-left:0}.bx--col-max-5{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-5,.bx--row--condensed .bx--col-max-5{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-5,.bx--row--narrow .bx--col-max-5{padding-right:1rem;padding-left:0}.bx--col-max-6{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-6,.bx--row--condensed .bx--col-max-6{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-6,.bx--row--narrow .bx--col-max-6{padding-right:1rem;padding-left:0}.bx--col-max-7{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-7,.bx--row--condensed .bx--col-max-7{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-7,.bx--row--narrow .bx--col-max-7{padding-right:1rem;padding-left:0}.bx--col-max-8{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-8,.bx--row--condensed .bx--col-max-8{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-8,.bx--row--narrow .bx--col-max-8{padding-right:1rem;padding-left:0}.bx--col-max-9{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-9,.bx--row--condensed .bx--col-max-9{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-9,.bx--row--narrow .bx--col-max-9{padding-right:1rem;padding-left:0}.bx--col-max-10{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-10,.bx--row--condensed .bx--col-max-10{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-10,.bx--row--narrow .bx--col-max-10{padding-right:1rem;padding-left:0}.bx--col-max-11{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-11,.bx--row--condensed .bx--col-max-11{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-11,.bx--row--narrow .bx--col-max-11{padding-right:1rem;padding-left:0}.bx--col-max-12{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-12,.bx--row--condensed .bx--col-max-12{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-12,.bx--row--narrow .bx--col-max-12{padding-right:1rem;padding-left:0}.bx--col-max-13{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-13,.bx--row--condensed .bx--col-max-13{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-13,.bx--row--narrow .bx--col-max-13{padding-right:1rem;padding-left:0}.bx--col-max-14{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-14,.bx--row--condensed .bx--col-max-14{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-14,.bx--row--narrow .bx--col-max-14{padding-right:1rem;padding-left:0}.bx--col-max-15{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-15,.bx--row--condensed .bx--col-max-15{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-15,.bx--row--narrow .bx--col-max-15{padding-right:1rem;padding-left:0}.bx--col-max-16{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max-16,.bx--row--condensed .bx--col-max-16{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max-16,.bx--row--narrow .bx--col-max-16{padding-right:1rem;padding-left:0}.bx--col-max,.bx--col-max--auto{width:100%;padding-right:1rem;padding-left:1rem}.bx--grid--condensed .bx--col-max,.bx--grid--condensed .bx--col-max--auto,.bx--row--condensed .bx--col-max,.bx--row--condensed .bx--col-max--auto{padding-right:.03125rem;padding-left:.03125rem}.bx--grid--narrow .bx--col-max,.bx--grid--narrow .bx--col-max--auto,.bx--row--narrow .bx--col-max,.bx--row--narrow .bx--col-max--auto{padding-right:1rem;padding-left:0}@media (min-width:99rem){.bx--col,.bx--col-max{max-width:100%;flex-basis:0;flex-grow:1}.bx--col--auto,.bx--col-max--auto{width:auto;max-width:100%;flex:1 0 0%}.bx--col-max-0{display:none}.bx--col-max-1{display:block;max-width:6.25%;flex:0 0 6.25%}.bx--col-max-2{display:block;max-width:12.5%;flex:0 0 12.5%}.bx--col-max-3{display:block;max-width:18.75%;flex:0 0 18.75%}.bx--col-max-4{display:block;max-width:25%;flex:0 0 25%}.bx--col-max-5{display:block;max-width:31.25%;flex:0 0 31.25%}.bx--col-max-6{display:block;max-width:37.5%;flex:0 0 37.5%}.bx--col-max-7{display:block;max-width:43.75%;flex:0 0 43.75%}.bx--col-max-8{display:block;max-width:50%;flex:0 0 50%}.bx--col-max-9{display:block;max-width:56.25%;flex:0 0 56.25%}.bx--col-max-10{display:block;max-width:62.5%;flex:0 0 62.5%}.bx--col-max-11{display:block;max-width:68.75%;flex:0 0 68.75%}.bx--col-max-12{display:block;max-width:75%;flex:0 0 75%}.bx--col-max-13{display:block;max-width:81.25%;flex:0 0 81.25%}.bx--col-max-14{display:block;max-width:87.5%;flex:0 0 87.5%}.bx--col-max-15{display:block;max-width:93.75%;flex:0 0 93.75%}.bx--col-max-16{display:block;max-width:100%;flex:0 0 100%}.bx--offset-max-0{margin-left:0}.bx--offset-max-1{margin-left:6.25%}.bx--offset-max-2{margin-left:12.5%}.bx--offset-max-3{margin-left:18.75%}.bx--offset-max-4{margin-left:25%}.bx--offset-max-5{margin-left:31.25%}.bx--offset-max-6{margin-left:37.5%}.bx--offset-max-7{margin-left:43.75%}.bx--offset-max-8{margin-left:50%}.bx--offset-max-9{margin-left:56.25%}.bx--offset-max-10{margin-left:62.5%}.bx--offset-max-11{margin-left:68.75%}.bx--offset-max-12{margin-left:75%}.bx--offset-max-13{margin-left:81.25%}.bx--offset-max-14{margin-left:87.5%}.bx--offset-max-15{margin-left:93.75%}}.bx--no-gutter,.bx--row.bx--no-gutter [class*=bx--col]{padding-right:0;padding-left:0}.bx--no-gutter--start,.bx--row.bx--no-gutter--start [class*=bx--col]{padding-left:0}.bx--no-gutter--end,.bx--row.bx--no-gutter--end [class*=bx--col]{padding-right:0}.bx--no-gutter--left,.bx--row.bx--no-gutter--left [class*=bx--col]{padding-left:0}.bx--no-gutter--right,.bx--row.bx--no-gutter--right [class*=bx--col]{padding-right:0}.bx--hang--start{padding-left:1rem}.bx--hang--end{padding-right:1rem}.bx--hang--left{padding-left:1rem}.bx--hang--right{padding-right:1rem}.bx--aspect-ratio{position:relative}.bx--aspect-ratio:before{width:1px;height:0;margin-left:-1px;content:"";float:left}.bx--aspect-ratio:after{display:table;clear:both;content:""}.bx--aspect-ratio--16x9:before{padding-top:56.25%}.bx--aspect-ratio--9x16:before{padding-top:177.77778%}.bx--aspect-ratio--2x1:before{padding-top:50%}.bx--aspect-ratio--1x2:before{padding-top:200%}.bx--aspect-ratio--4x3:before{padding-top:75%}.bx--aspect-ratio--3x4:before{padding-top:133.33333%}.bx--aspect-ratio--3x2:before{padding-top:66.66667%}.bx--aspect-ratio--2x3:before{padding-top:150%}.bx--aspect-ratio--1x1:before{padding-top:100%}.bx--aspect-ratio--object{position:absolute;top:0;left:0;width:100%;height:100%}.bx--image,:host(dds-card-cta-image),:host(dds-image){position:relative}.bx--image__img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.bx--image__img--border{outline:1px solid var(--cds-decorative-01,#e0e0e0)}.bx--image__longdescription{position:absolute;width:1px;height:1px;left:-10000px;top:auto;overflow:hidden}.bx--image__icon,:host(dds-card-cta-image) ::slotted(svg[slot=icon]),:host(dds-image) ::slotted(svg[slot=icon]){position:absolute;top:calc(50% - 32px);right:calc(50% - 32px)}:host(dds-card-cta-image),:host(dds-image){display:block}:host(dds-image-item){display:none}:host(dds-card-cta-image){position:relative;padding-top:75%;height:0;overflow:hidden}:host(dds-card-cta-image) .bx--image__img{position:absolute;height:100%;top:0}']);let _t,_t2,_=t=>t;const{prefix:prefix}=settings.a,{stablePrefix:ddsPrefix}=settings_settings.a;let image_DDSImage=Object(decorate.a)([Object(lit_element.c)(`${ddsPrefix}-image`)],(function(_initialize,_StableSelectorMixin){return{F:class extends _StableSelectorMixin{constructor(...args){super(...args),_initialize(this)}},d:[{kind:"field",decorators:[Object(lit_element.e)()],key:"_images",value:()=>[]},{kind:"method",key:"_handleSlotChange",value:function({target:target}){const{selectorItem:selectorItem}=this.constructor;this._images=target.assignedNodes().reduce(((acc,node)=>("SLOT"===node.tagName?acc.push(...node.assignedNodes()):acc.push(node),acc)),[]).filter((node=>node.nodeType===Node.ELEMENT_NODE&&node.matches(selectorItem)))}},{kind:"field",decorators:[Object(lit_element.f)()],key:"alt",value:()=>""},{kind:"field",decorators:[Object(lit_element.f)({attribute:"default-src"})],key:"defaultSrc",value:()=>""},{kind:"field",decorators:[Object(lit_element.f)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"method",key:"render",value:function(){const{alt:alt,border:border,defaultSrc:defaultSrc,_images:images,_handleSlotChange:handleSlotChange}=this,imgClasses=Object(class_map.a)({[`${prefix}--image__img`]:!0,[`${prefix}--image__img--border`]:border});return Object(lit_element.d)(_t||(_t=_`
      <slot @slotchange="${0}"></slot>
      <picture>
        ${0}
        <img class="${0}" src="${0}" alt="${0}" aria-describedby="long-description" loading="lazy" />
      </picture>
      <div id="long-description" class="${0}--image__longdescription">
        <slot name="long-description"></slot>
      </div>
      <slot name="icon"></slot>
    `),handleSlotChange,images.map((image=>Object(lit_element.d)(_t2||(_t2=_`<source media="${0}" srcset="${0}"></source>`),image.getAttribute("media"),image.getAttribute("srcset")))),imgClasses,defaultSrc,alt,prefix)}},{kind:"get",static:!0,key:"selectorItem",value:function(){return`${ddsPrefix}-image-item`}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${ddsPrefix}--image`}},{kind:"field",static:!0,key:"styles",value:()=>image_css}]}}),Object(stable_selector.a)(lit_element.a));__webpack_exports__.a=image_DDSImage}}]);
//# sourceMappingURL=vendors~global~41357eb7.js.map