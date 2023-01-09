
[DOAP](https://github.com/ewilderj/doap/wiki) stands for 'description of a project'. An app produced by [Melvin Carvalho](https://github.com/melvincarvalho/doap-app) ([MIT LICENSE](https://github.com/melvincarvalho/doap-app/blob/master/LICENSE) generates a DOAP File. 

The Header information - including CSS

```html

<!DOCTYPE html>
<html lang="en">

<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>DOAP Generator</title>
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet">
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" type="text/css" rel="stylesheet">

<!--[if lt IE 9]>
<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<link rel="shortcut icon" href="/bootstrap/img/favicon.ico">
<link rel="apple-touch-icon" href="/bootstrap/img/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="/bootstrap/img/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="/bootstrap/img/apple-touch-icon-114x114.png">

<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

<style type="text/css" id="bsCss">
/* override bootstrap styles */
body { padding-top: 50px;}
</style>
</head>

```

The HTML Body Information:

``` html

<body >

<div class="navbar navbar-inverse navbar-fixed-top">

<div class="container">
<div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">

<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>

<a class="navbar-brand" href="#">DOAP Generator</a>

</div>

<div class="collapse navbar-collapse">
<ul class="nav navbar-nav">
<li class="active"><a href="#">Home</a></li>
</ul>

</div><!--/.nav-collapse -->
</div>
</div>

<div class="container">

<div>

<h1>DOAP</h1>

<p class="lead">

<form id="form" action="http://any23.org/turtle/crschmidt.net/semweb/doapamatic/" method="get">

```

The `get` request goes to any23 to obtain the DOAP ontology file as turtle from: https://crschmidt.net/semweb/doapamatic/ 

then there's a form;

``` html

<table class="doapamatic">

<tr valign="top"><td>Name:</td><td class="about"><input property="http://usefulinc.com/ns/doap#name" type="text" name="name" /></td></tr>

<tr valign="top"><td>Save To:</td><td class="about"> <input type="text" name="save" id="save"/></td></tr>

<tr valign="top"><td>Short Name:</td><td class="about"> <input property="http://usefulinc.com/ns/doap#shortname" type="text" name="shortname" /></td></tr>

<tr valign="top"><td>Description:</td><td class="about"> <textarea cols="50" rows="5" property="http://usefulinc.com/ns/doap#description" name="description"></textarea></td></tr>

<tr valign="top"><td>Short Description:</td><td class="about"> <input property="http://usefulinc.com/ns/doap#shortdesc" type="text" name="shortdesc" /></td></tr>

<tr valign="top"><td>Homepage:</td><td class="about"> <input rel="http://usefulinc.com/ns/doap#homepage" type="text" name="homepage" id="homepage"/></td></tr>

<tr valign="top"><td>Wiki:</td><td class="about"> <input rel="http://usefulinc.com/ns/doap#wiki" type="text" name="wiki" /></td></tr>

<tr valign="top"><td>Download Page (uri):</td><td class="about"> <input rel="http://usefulinc.com/ns/doap#download-page" type="text" name="download-page" /></td></tr>

<tr valign="top"><td>Bug Database (uri):</td><td class="about"> <input property="http://usefulinc.com/ns/doap#bug-database" type="text" name="bug-database" /></td></tr>

<tr valign="top"><td>Maintainer (uri):</td><td class="about"> <input rel="http://usefulinc.com/ns/doap#maintainer" type="text" name="maintainer" /></td></tr>

<tr valign="top">

<td>

License:<br />Select one or more

</td>

<td class="license">

<select property="http://usefulinc.com/ns/doap#license" name="license[]" size="5" multiple="multiple">

<option value="asl20">Apache License 2.0</option>

<option value="artistic">Artistic</option>

<option value="bsd">BSD</option>

<option value="gpl">GPL 2</option>

<option value="lgpl">LGPL 2.1</option>

<option value="mit">MIT</option>

<option value="mpl">MPL</option>

<option value="w3c">W3C</option>

</select>

</td>

</tr>

</table>

<input type="submit" value="Generate" />

</form>

</div>

<p class="credit"><cite>Based on work by Christopher Schmidt</cite></p>

```

Then there's the use of jquery and the script required to push the file onto a RWW server

``` html

<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>

<script>

$('form').on('submit',function(e){

var str = '<#this> \n';

$( "[property]" ).each(function(){ if($(this).val()) str += ( ' <' + $(this).attr('property') + '> "' + $(this).val() + '" ;\n' ) });

$( "[rel^='htt']" ).each(function(){ if($(this).val()) str += ( '<' + $(this).attr('rel') + '> <' + $(this).val() + '> ;' ) })

str += ' a <http://usefulinc.com/ns/doap#Project> .';

//alert(str);

var save = $('#save').val();
var file = save?save:'doap';
xhr = new XMLHttpRequest();
xhr.open('PUT', file, false);
xhr.setRequestHeader('Content-Type', 'text/turtle; charset=UTF-8');
xhr.send(str);
alert('Saved DOAP to ' + file);
e.preventDefault();
});

</script>

</p>
</div>
</div><!-- /.container -->

<script type='text/javascript' src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script type='text/javascript' src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

<script type='text/javascript' id="bsJs">

$(document).ready(function() {

});

</script>
</body>
</html>

```

and that's it. 