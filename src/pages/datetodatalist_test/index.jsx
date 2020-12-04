import Taro, {Component} from '@tarojs/taro';
import {connect} from '@tarojs/redux';
import {View,Text,Image,Button} from '@tarojs/components';
import './index.scss';

export default class Demo extends Component {
  config = {
    navigationBarTitleText: '测试datetodatalist',
    usingComponents: {
      'datetodatalist': '../../components/datetodatalist/datetodatalist'
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      datetodatalist: null
    }
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    let datetodatalist = this.$scope.selectComponent('#datetodatalist');
    datetodatalist.dtdlInit({})
    this.setState({datetodatalist: datetodatalist})

    datetodatalist.nextMonthCallback = function () {
        
    }

    datetodatalist.previousMonthCallback = function () {
        
    }

    datetodatalist.selectedDayCallback = function (datestr) {
        console.log(datestr)
    }

    let status = datetodatalist.status

    datetodatalist.updateMapList({
      "2020-11-20": [{
        status: status.Execute,
        time: "09:00",
        id: "09:00"
      },{
        status: status.Abnormal,
        time: "10:00",
        id: "10:00"
      },{
        status: status.Abnormal,
        time: "14:00",
        id: "14:00"
      }]
    })
  }

  componentWillUnmount() {

  }

  componentDidShow() {
    
  }

  componentDidHide() {

  }

  render() {
    return (
      <View className="parant">
          <datetodatalist id="datetodatalist"></datetodatalist>
      </View>
    )
  }
}
