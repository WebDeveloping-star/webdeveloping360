<script type="text/javascript">
	var btn1 = document.getElementById('btn1')
	var display1 = document.getElementById('display1')
	display1.style.display = "none";
	btn1.onclick = function (){
		if (display1.style.display == "none") {
			display1.style.display = "block";
		}
		else{
			display1.style.display = "none";
		}
	}
</script>