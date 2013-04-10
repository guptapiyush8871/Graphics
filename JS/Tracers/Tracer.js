//This file contains the class definition of a tracer 
//Contructors
function Tracer(a){
	if(arguments.length == 0){
		this.w = null;
	}
	else if(arguments.length == 1){
		this.w = a;
	}
};

//--------------Prototypes---------------
//Trace a ray
	Tracer.prototype.TraceRay = function(a1,a2){
		if(arguments.length == 0){
			return new RgbColor();
		}
		else if(arguments.length == 2){
			return new RgbColor();
		}
	};