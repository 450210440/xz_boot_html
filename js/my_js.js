

function add1(){
	n1.value=++n1.value
	s1.innerHTML="￥"+n1.value*6599+'.00';
}

function jian1(){
	if(n1.value<=0){
		alert('请直接清除该商品')
		return;
	}
	n1.value=--n1.value
	s1.innerHTML="￥"+n1.value*6599+'.00';
}


function add2(){
	n2.value=++n2.value
	s2.innerHTML="￥"+n2.value*6599+'.00';
}

function jian2(){
	if(n2.value<=0){
		alert('请直接清除该商品')
		return;
	}
	n2.value=--n2.value
	s2.innerHTML="￥"+n2.value*6599+'.00';
}



function add3(){
	n3.value=++n3.value
	s3.innerHTML="￥"+n3.value*6599+'.00';
}

function jian3(){
	if(n1.value<=0){
		alert('请直接清除该商品')
		return;
	}
	n3.value=--n3.value
	s3.innerHTML="￥"+n3.value*6599+'.00';
}