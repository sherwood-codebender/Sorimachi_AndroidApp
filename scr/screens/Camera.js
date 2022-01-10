import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
	FlatList,
	Image,
	Alert,
  } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { theme } from '../utils/theme';
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from 'expo-image-picker';
import Toast from "react-native-simple-toast"
// import TextRecognition from 'react-native-text-recognition';
// import ImagePicker from "react-native-image-picker"


function ImageCustom (props)  {
	let {Info_item} = props
	return(
		<TouchableOpacity onPress={() => props.TouchImage(Info_item)}>
			<Image
				style={styles.media}
				source={{ uri: Info_item.uri }}
				resizeMode="cover" 
			/>
		</TouchableOpacity>
	)
}

export default class CameraScreen extends React.Component{
	constructor(props){
	super(props)
	this.state={
		hasPermission : false,
		medias: [],
		type : Camera.Constants.Type.back,
		flash: Camera.Constants.FlashMode.off,
		imageCamera : null,
		picPicture : false,
		assetImage: Object,
		text: "", 
		}
	}
	
	async componentDidMount(){
		const {status: status_Camera} = await Camera.requestCameraPermissionsAsync()
		const {status: status_CameraRoll} = await MediaLibrary.requestPermissionsAsync()
		this.setState({
			hasPermission : status_Camera === 'granted'
		})

		if (status_CameraRoll === "granted") {
			this.loadCamera()
		}
		// const result = await TextRecognition.recognize(this.state.imageCamera)
		// console.log(result)
	}

	loadCamera = async () => {
		const files = await MediaLibrary.getAssetsAsync({
			first: 25,
			mediaType: ["photo", "video"],
			sortBy: ["creationTime"]
		})
		this.setState({
			medias: files.assets
		})
	}

	getPicture = async () => {
		let {picPicture} = this.state

		if(this.camera){
			const image = await this.camera.takePictureAsync({
			base64: true,
			quality: 1
			}); 
			
			this.setState({
				imageCamera : image.uri,
				// getPicture : true
			})
			await MediaLibrary.createAssetAsync(image.uri)
			this.loadCamera()
			Toast.showWithGravity("Chọn ảnh bên dưới để xem chi tiết", Toast.SHORT, 0)
		}
	}

	deletePicture = async () => {
		await MediaLibrary.deleteAssetsAsync(this.state.assetImage.id) &&
			this.setState({
				assetImage: Object,
				imageCamera: null, 
				picPicture: false,
			}) 
			this.loadCamera()
		
	}

	handlePicture = (item) => {
		this.setState({
			imageCamera: item.uri,
			assetImage: item,
			picPicture: true
		})
		
	}

	backCamera = () => {
		this.setState({
			picPicture: false
		})
	}

	flipCamera = () => {
		this.setState({
			type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
			flash: Camera.Constants.FlashMode.off,
		})
	}

	flashCamera = () => {
		this.state.type === Camera.Constants.Type.back &&
			this.setState({
				flash: this.state.flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off
			})
			
	}

	openImage = async () => {
		let persion = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if( persion.granted == false){
			alert("No access to Library Image")
		}
		let result = await ImagePicker.launchImageLibraryAsync()
		if (result.cancelled == true){return}

		this.setState({
			imageCamera: result.uri,
			picPicture: true,
		})
	}

	recogText = async () => {
		const result = await TextRecognition.recognize(this.state.assetImage.uri)
		console.log(this.state.assetImage.uri)
	}

	confirmDelete = () => {
		Alert.alert(
			"Xác nhận xóa",
			"Bạn chắc chắn xóa ảnh này?",
			[
			  {
				text: "Đồng ý",
				onPress: () => {
				  this.deletePicture();
				},
			  },
			  {
				text: "Hủy bỏ",
			  },
			]
		)
	}

	render() {
		let {hasPermission, medias, type, flash, picPicture, imageCamera} = this.state

		if (!hasPermission) {
			return <View style={{ 
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center' 
			}}>
				<Text style={{ color: '#fff' }}>No access to Camera</Text>
			</View>
		}

		return(
			<View style={styles.container}>
				{ !picPicture ? 
					<View style={styles.container}>
						<Camera 
							style={styles.camera}
							ref = {ref => {
								this.camera = ref;
							}}
							type={type}
							flashMode={flash}
						
						/>
						<View style={styles.footer}>
							<View style={styles.medias}>
								<FlatList
									data={medias}
									renderItem={({ item }) => 
										(<ImageCustom Info_item= {item} TouchImage = {this.handlePicture}/>)
									}
									keyExtractor={item => item.id}
									horizontal
								/>
							</View>
							<View style={styles.buttons}>
								<TouchableOpacity onPress={this.flashCamera}>
									<Icon name={flash === Camera.Constants.FlashMode.off ? "flash-off" : "flash"} color={theme.colors.white} size={30} />
								</TouchableOpacity>
								<TouchableOpacity onPress={this.getPicture}>
									<Icon name="camera-iris" color={theme.colors.white} size={100} />
								</TouchableOpacity>
								<TouchableOpacity onPress={this.flipCamera}>
									<Icon name="camera-party-mode" color={theme.colors.white} size={30} />
								</TouchableOpacity>
							</View>
						</View>
					</View>
					:
					<View style={styles.camera}>
						<Image
                            style={styles.camera}
                            source = {{uri : imageCamera}}
                        />

						<View style={styles.header}>
							<View style={{ flex: 1, marginLeft: 5 }}>
								<TouchableOpacity onPress={this.backCamera}>
									<Icon name="arrow-left" color={theme.colors.white} size={35} />
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.footer}>
							<View style={styles.buttons}>
								<TouchableOpacity onPress={this.confirmDelete}>
									<Icon name="delete" color={"red"} size={50} />
								</TouchableOpacity>
								<TouchableOpacity onPress={this.openImage}>
									<Icon name="image-multiple" color={"blue"} size={50} />
								</TouchableOpacity>
							</View>
						</View>
					</View>
					
				}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	camera: {
		flex: 1
	},
	header: {
		position: 'absolute',
		top: 0,
		width: '100%',
		marginTop: 15
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		width: '100%'
	},
	medias: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 10
	},
	media: {
		width: 80,
		height: 80,
		marginHorizontal: 2
	},
	buttons: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 20
	}
})

