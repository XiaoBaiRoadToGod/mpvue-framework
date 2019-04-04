const baseUrlApi = process.env.NODE_ENV === 'development' ? 'http://192.168.1.123:8888' : '线上服务器';
export default baseUrlApi;
// module.exports = 'http://192.168.1.123:8888'  //165