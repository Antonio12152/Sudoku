import { connect } from "react-redux"
import  Level1  from "./Level1";
import { setValue } from "./store/redusers/level1Reduser";
import { startGame } from "./store/redusers/level1Reduser";
const mapStateToProps = (state) =>{
    return {
        matrix : state.level1.matrix.start,
        errors: state.level1.errors,
        values: state.level1.values
    }
}
export default connect(mapStateToProps,{setValue,startGame})(Level1);