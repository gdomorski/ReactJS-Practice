
//The way in which you create a new component. You save it to a new variable because you need to tell React to which element the component should be rendered
var Practice = React.createClass({
	render: function () {
		return (

			//this is a lot of code below and it is very repetitive. When coding it is important to make sure it works first, then you can refactor to make it better.
			//I will be making another file to show a refactored version of this code.
			<div className="container">
				<form>
					<p className="h3">Who is your favorite movie star?</p>

					<p className="radio">
						<label>
							<input type="radio" name="referrer" value="tcruise"/>
							Tom Cruise
						</label>
					</p>
					<p className="radio">
						<label>
							<input type="radio" name="referrer" value="wsmith"/>
							Will Smith
						</label>
					</p>
					<p className="radio">
						<label>
							<input type="radio" name="referrer" value="bpitt"/>
							Brad Pitt
						</label>
					</p>
					<p className="radio">
						<label>
							<input type="radio" name="referrer" value="jlaw"/>
							Jennifer Lawrence
						</label>
					</p>
						<p className="radio">
						<label>
							<input type="radio" name="referrer" value="thanks"/>
							 Tom Hanks
						</label>
					</p>
					<p className="form-group radio">
						<label>
							<input type="radio" name="referrer" value="other"/>
							Other
						</label>
						<label className="form-inline">
							Please specify:
							<input type="text" name="referrer_other"/>
						</label>
					</p>

					<p><input type="submit"/></p>
				</form>
			</div>

		);
	}
});