function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}




function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//假设：所有值都已经到了

		for(var attr in json)
		{
			var cur=0;


			cur=parseInt(getStyle(obj, attr));

			var speed=-2;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=json[attr])
				bStop=false;



				obj.style[attr]=cur+speed+'px';

		}

		if(bStop)
		{
			clearInterval(obj.timer);

			if(fnEnd)fnEnd();
		}
	}, 30);
}
