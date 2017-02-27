<?php 
function incr(&$a){
    echo $a;
    $a++;
    echo $a;
}
$num=10;
echo $num;
incr($num);
echo $num;
?>
