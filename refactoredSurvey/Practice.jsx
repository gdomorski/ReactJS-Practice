
//The way in which you create a new component. You save it to a new variable because you need to tell React to which element the component should be rendered
var Practice = React.createClass({
	render: function () {
		return (

			//for the options, I made my own component, so code would not be repetitive. For the "other" option, I had to make a different component.  
			//The code for each component is located in its own jsx file.
			<div className="container">
				<form>
					<p className="h3">Who is your favorite movie star?</p>


					<Options value="tcruise">
					Tom Cruise
					</Options>
					
					<Options value="wsmith">
					Will Smith
					</Options>

					<Options value="bpitt">
					Brad Pitt
					</Options>
				
					<Options value="jlaw">
					Jennifer Lawrence
					</Options>

					<Options value="thanks">
					Tom Hanks
					</Options>
					
					<OtherOption/>

					<p><input type="submit"/></p>
				</form>
			</div>

		);
	}
});