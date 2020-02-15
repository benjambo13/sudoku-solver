import React from 'react';

class Sudoku extends React.Component
{
    render() {
        return (
            <div>
                <table className="table-bordered" style={mainTableStyles}>
                    <colgroup>
                        <col style={{width:"11.111%"}}/>
                        <col style={{width:"11.111%"}}/>
                        <col style={columnRightStyle}/>
                        <col style={{width:"11.111%"}}/>
                        <col style={{width:"11.111%"}}/>
                        <col style={columnRightStyle}/>
                        <col style={{width:"11.111%"}}/>
                        <col style={{width:"11.111%"}}/>
                        <col style={{width:"11.111%"}}/>
                    </colgroup>
                    <tbody>
                    <tr style={basicRowStyles}>
                        <td id="i0" onClick={() => {this.props.setSelected(0)}}>{this.props.sudoku[0]}</td>
                        <td id="i1"  onClick={() => {this.props.setSelected(1)}}>{this.props.sudoku[1]}</td>
                        <td id="i2"  onClick={() => {this.props.setSelected(2)}}>{this.props.sudoku[2]}</td>
                        <td id="i3"  onClick={() => {this.props.setSelected(3)}}>{this.props.sudoku[3]}</td>
                        <td id="i4"  onClick={() => {this.props.setSelected(4)}}>{this.props.sudoku[4]}</td>
                        <td id="i5"  onClick={() => {this.props.setSelected(5)}}>{this.props.sudoku[5]}</td>
                        <td id="i6"  onClick={() => {this.props.setSelected(6)}}>{this.props.sudoku[6]}</td>
                        <td id="i7"  onClick={() => {this.props.setSelected(7)}}>{this.props.sudoku[7]}</td>
                        <td id="i8"  onClick={() => {this.props.setSelected(8)}}>{this.props.sudoku[8]}</td>
                    </tr>
                    <tr style={basicRowStyles}>
                        <td id="i9" onClick={() => {this.props.setSelected(9)}}>{this.props.sudoku[9]}</td>
                        <td id="i10" onClick={() => {this.props.setSelected(10)}}>{this.props.sudoku[10]}</td>
                        <td id="i11" onClick={() => {this.props.setSelected(11)}}>{this.props.sudoku[11]}</td>
                        <td id="i12" onClick={() => {this.props.setSelected(12)}}>{this.props.sudoku[12]}</td>
                        <td id="i13" onClick={() => {this.props.setSelected(13)}}>{this.props.sudoku[13]}</td>
                        <td id="i14" onClick={() => {this.props.setSelected(14)}}>{this.props.sudoku[14]}</td>
                        <td id="i15" onClick={() => {this.props.setSelected(15)}}>{this.props.sudoku[15]}</td>
                        <td id="i16" onClick={() => {this.props.setSelected(16)}}>{this.props.sudoku[16]}</td>
                        <td id="i17" onClick={() => {this.props.setSelected(17)}}>{this.props.sudoku[17]}</td>
                    </tr>
                    <tr style={rowBottomBorder}>
                        <td id="i18" onClick={() => {this.props.setSelected(18)}}>{this.props.sudoku[18]}</td>
                        <td id="i19" onClick={() => {this.props.setSelected(19)}}>{this.props.sudoku[19]}</td>
                        <td id="i20" onClick={() => {this.props.setSelected(20)}}>{this.props.sudoku[20]}</td>
                        <td id="i21" onClick={() => {this.props.setSelected(21)}}>{this.props.sudoku[21]}</td>
                        <td id="i22" onClick={() => {this.props.setSelected(22)}}>{this.props.sudoku[22]}</td>
                        <td id="i23" onClick={() => {this.props.setSelected(23)}}>{this.props.sudoku[23]}</td>
                        <td id="i24" onClick={() => {this.props.setSelected(24)}}>{this.props.sudoku[24]}</td>
                        <td id="i25" onClick={() => {this.props.setSelected(25)}}>{this.props.sudoku[25]}</td>
                        <td id="i26" onClick={() => {this.props.setSelected(26)}}>{this.props.sudoku[26]}</td>
                    </tr>
                    <tr style={basicRowStyles}>
                        <td id="i27" onClick={() => {this.props.setSelected(27)}}>{this.props.sudoku[27]}</td>
                        <td id="i28" onClick={() => {this.props.setSelected(28)}}>{this.props.sudoku[28]}</td>
                        <td id="i29" onClick={() => {this.props.setSelected(29)}}>{this.props.sudoku[29]}</td>
                        <td id="i30" onClick={() => {this.props.setSelected(30)}}>{this.props.sudoku[30]}</td>
                        <td id="i31" onClick={() => {this.props.setSelected(31)}}>{this.props.sudoku[31]}</td>
                        <td id="i32" onClick={() => {this.props.setSelected(32)}}>{this.props.sudoku[32]}</td>
                        <td id="i33" onClick={() => {this.props.setSelected(33)}}>{this.props.sudoku[33]}</td>
                        <td id="i34" onClick={() => {this.props.setSelected(34)}}>{this.props.sudoku[34]}</td>
                        <td id="i35" onClick={() => {this.props.setSelected(35)}}>{this.props.sudoku[35]}</td>
                    </tr>
                    <tr style={basicRowStyles}>
                        <td id="i36" onClick={() => {this.props.setSelected(36)}}>{this.props.sudoku[36]}</td>
                        <td id="i37" onClick={() => {this.props.setSelected(37)}}>{this.props.sudoku[37]}</td>
                        <td id="i38" onClick={() => {this.props.setSelected(38)}}>{this.props.sudoku[38]}</td>
                        <td id="i39" onClick={() => {this.props.setSelected(39)}}>{this.props.sudoku[39]}</td>
                        <td id="i40" onClick={() => {this.props.setSelected(40)}}>{this.props.sudoku[40]}</td>
                        <td id="i41" onClick={() => {this.props.setSelected(41)}}>{this.props.sudoku[41]}</td>
                        <td id="i42" onClick={() => {this.props.setSelected(42)}}>{this.props.sudoku[42]}</td>
                        <td id="i43" onClick={() => {this.props.setSelected(43)}}>{this.props.sudoku[43]}</td>
                        <td id="i44" onClick={() => {this.props.setSelected(44)}}>{this.props.sudoku[44]}</td>
                    </tr>
                    <tr style={rowBottomBorder}>
                        <td id="i45" onClick={() => {this.props.setSelected(45)}}>{this.props.sudoku[45]}</td>
                        <td id="i46" onClick={() => {this.props.setSelected(46)}}>{this.props.sudoku[46]}</td>
                        <td id="i47" onClick={() => {this.props.setSelected(47)}}>{this.props.sudoku[47]}</td>
                        <td id="i48" onClick={() => {this.props.setSelected(48)}}>{this.props.sudoku[48]}</td>
                        <td id="i49" onClick={() => {this.props.setSelected(49)}}>{this.props.sudoku[49]}</td>
                        <td id="i50" onClick={() => {this.props.setSelected(50)}}>{this.props.sudoku[50]}</td>
                        <td id="i51" onClick={() => {this.props.setSelected(51)}}>{this.props.sudoku[51]}</td>
                        <td id="i52" onClick={() => {this.props.setSelected(52)}}>{this.props.sudoku[52]}</td>
                        <td id="i53" onClick={() => {this.props.setSelected(53)}}>{this.props.sudoku[53]}</td>
                    </tr>
                    <tr style={basicRowStyles}>
                        <td id="i54" onClick={() => {this.props.setSelected(54)}}>{this.props.sudoku[54]}</td>
                        <td id="i55" onClick={() => {this.props.setSelected(55)}}>{this.props.sudoku[55]}</td>
                        <td id="i56" onClick={() => {this.props.setSelected(56)}}>{this.props.sudoku[56]}</td>
                        <td id="i57" onClick={() => {this.props.setSelected(57)}}>{this.props.sudoku[57]}</td>
                        <td id="i58" onClick={() => {this.props.setSelected(58)}}>{this.props.sudoku[58]}</td>
                        <td id="i59" onClick={() => {this.props.setSelected(59)}}>{this.props.sudoku[59]}</td>
                        <td id="i60" onClick={() => {this.props.setSelected(60)}}>{this.props.sudoku[60]}</td>
                        <td id="i61" onClick={() => {this.props.setSelected(61)}}>{this.props.sudoku[61]}</td>
                        <td id="i62" onClick={() => {this.props.setSelected(62)}}>{this.props.sudoku[62]}</td>
                    </tr>
                    <tr style={basicRowStyles}>
                        <td id="i63" onClick={() => {this.props.setSelected(63)}}>{this.props.sudoku[63]}</td>
                        <td id="i64" onClick={() => {this.props.setSelected(64)}}>{this.props.sudoku[64]}</td>
                        <td id="i65" onClick={() => {this.props.setSelected(65)}}>{this.props.sudoku[65]}</td>
                        <td id="i66" onClick={() => {this.props.setSelected(66)}}>{this.props.sudoku[66]}</td>
                        <td id="i67" onClick={() => {this.props.setSelected(67)}}>{this.props.sudoku[67]}</td>
                        <td id="i68" onClick={() => {this.props.setSelected(68)}}>{this.props.sudoku[68]}</td>
                        <td id="i69" onClick={() => {this.props.setSelected(69)}}>{this.props.sudoku[69]}</td>
                        <td id="i70" onClick={() => {this.props.setSelected(70)}}>{this.props.sudoku[70]}</td>
                        <td id="i71" onClick={() => {this.props.setSelected(71)}}>{this.props.sudoku[71]}</td>
                    </tr>
                    <tr style={basicRowStyles}>
                        <td id="i72" onClick={() => {this.props.setSelected(72)}}>{this.props.sudoku[72]}</td>
                        <td id="i73" onClick={() => {this.props.setSelected(73)}}>{this.props.sudoku[73]}</td>
                        <td id="i74" onClick={() => {this.props.setSelected(74)}}>{this.props.sudoku[74]}</td>
                        <td id="i75" onClick={() => {this.props.setSelected(75)}}>{this.props.sudoku[75]}</td>
                        <td id="i76" onClick={() => {this.props.setSelected(76)}}>{this.props.sudoku[76]}</td>
                        <td id="i77" onClick={() => {this.props.setSelected(77)}}>{this.props.sudoku[77]}</td>
                        <td id="i78" onClick={() => {this.props.setSelected(78)}}>{this.props.sudoku[78]}</td>
                        <td id="i79" onClick={() => {this.props.setSelected(79)}}>{this.props.sudoku[79]}</td>
                        <td id="i80" onClick={() => {this.props.setSelected(80)}}>{this.props.sudoku[80]}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mainTableStyles = {
    margin: "25px auto",
    textAlign: "center",
    width: '30pc',
}

const rowBottomBorder = {
    height: "45px",
    borderBottomStyle: "solid",
    borderBottomWidth: "5px" ,
}

const columnRightStyle = {
    borderRightStyle: "solid",
    borderRightWidth: "5px",
    borderColor: "#dee2e6",
    width:"11.111%",
}

const basicRowStyles = {
    height: "45px",
}

export default Sudoku;