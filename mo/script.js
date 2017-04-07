    function  Function()  {        
            var q = 'http://'  +  document.getElementById("name").value;  
            var el= document.getElementById('block2').innerHTML='<iframe id="nam" scrolling="no" style="width:100%; height:1000px"></iframe> ';
             var i=document.getElementById('nam');
               i.src=q;
