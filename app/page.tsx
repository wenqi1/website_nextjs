import { Carousel, Image, Col, Row } from 'antd';

const contentStyle: React.CSSProperties = {
	marginTop: '50px',
	height: '40rem',
	color: '#fff',
	lineHeight: '40rem',
	textAlign: 'center',
	background: '#364d79',
  };

export default function Home() {
  return (
	<div>
		<Carousel effect="fade" autoplay>
			<div>
				<h3 style={contentStyle}>1</h3>
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
			<div>
				<h3 style={contentStyle}>4</h3>
			</div>
		</Carousel>

		<div style={{height:'120px', lineHeight:'120px', textAlign:'center', fontSize:'30px'}}>
			NEW PRODUCT
		</div>
		
		<Row justify="space-around">
			<Col span={8} >
				<Image style={{padding:'50px'}}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
			</Col>
			<Col span={8} >
				<Image style={{padding:'50px'}}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
			</Col>
			<Col span={8} >
				<Image style={{padding:'50px'}}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
			</Col>
		</Row>

		<Row justify="space-around">
			<Col span={8} >
				<Image style={{padding:'50px'}}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
			</Col>
			<Col span={8} >
				<Image style={{padding:'50px'}}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
			</Col>
			<Col span={8} >
				<Image style={{padding:'50px'}}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
			</Col>
		</Row>
	</div>
	
  )
  	
}
