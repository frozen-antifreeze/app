import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const data = [
  // {
  //   id: "",
  //   name: "",
  //   scientific_name: "",
  //   origin: "",
  //   avg_age: "",
  //   age_unit: '',
  //   info: "",
  //   status: "",
  //   source: require('../assets/.jpg')
  // },

  {
    id: "1",
    name: "Cây Bàng",
    scientific_name: "Ficus benjamina",
    origin: "Châu Á",
    avg_age: "20 - 30",
    age_unit: 'y',
    info: "Cây Bàng được sử dụng trong cảnh quan đô thị vì có khả năng làm mát không gian và tạo cảnh quan xanh. Lá cây cũng có tác dụng làm giảm ô nhiễm không khí",
    status: "LC",
    source: require('../assets/pants/1.jpg')
  },

  {
    id: "2",
    name: "Cây Sâm đất",
    scientific_name: "Panax vietnamensis",
    origin: "Việt Nam",
    avg_age: "5 - 7",
    age_unit: 'y',
    info: "Cây Sâm đất được sử dụng trong dược liệu và làm đẹp. Rễ cây có chứa các chất có tác dụng chống oxy hóa và tăng cường sức khỏe.",
    status: "EN",
    source: require('../assets/pants/2.jpg')
  },

  {
    id: "3",
    name: "Cây Hoa Hồng",
    scientific_name: "Rosa spp.",
    origin: "Châu Á",
    avg_age: "5 - 10",
    age_unit: 'y',
    info: "Cây Hoa Hồng là loài cây hoa phổ biến trong cảnh quan đô thị. Hoa Hồng có nhiều màu sắc và hương thơm đặc trưng.",
    status: "LC",
    source: require('../assets/pants/3.jpg')
  },
  
  {
    id: "4",
    name: "Cây Lúa",
    scientific_name: "Oryza sativa",
    origin: "Châu Á",
    avg_age: "3 - 6",
    age_unit: 'm',
    info: "Cây Lúa là cây lương thực quan trọng, cung cấp nguồn thực phẩm chính cho nhiều quốc gia trên thế giới.",
    status: "LC",
    source: require('../assets/pants/4.jpg')
  },
  
  {
    id: "5",
    name: "Cây Gõ đỏ",
    scientific_name: "Dalbergia cochinchinensis",
    origin: "Việt Nam",
    avg_age: "50 - 100",
    age_unit: 'y',
    info: "Cây Gõ đỏ là loài cây gỗ quý hiếm, được sử dụng trong chế tác đồ gỗ và nội thất cao cấp.",
    status: "EN",
    source: require('../assets/pants/5.jpg')
  },
  
  {
    id: "6",
    name: "Cây Bàng Đài Loan",
    scientific_name: "Ficus microcarpa",
    origin: "Đài Loan",
    avg_age: "20 - 30",
    age_unit: 'y',
    info: "Cây Bàng Đài Loan là một loại cây cảnh quan phổ biến trong đô thị. Nó có khả năng chịu được ô nhiễm không khí và tạo ra không gian xanh mát.",
    status: "LC",
    source: require('../assets/pants/6.jpg')
  },
  
  {
    id: "7",
    name: "Cây Ngải Cứu",
    scientific_name: "Artemisia vulgaris",
    origin: "Châu Âu, Bắc Mỹ, Châu Á",
    avg_age: "2 - 3",
    age_unit: 'y',
    info: "Cây Ngải Cứu được sử dụng trong dược liệu và làm đẹp. Lá cây có chứa các chất có tác dụng chống vi khuẩn và chữa lành vết thương.    ",
    status: "LC",
    source: require('../assets/pants/7.jpg')
  },
  
  {
    id: "8",
    name: "Cây Đại Hồi",
    scientific_name: "Magnolia grandiflora",
    origin: "Bắc Mỹ",
    avg_age: "80 - 120",
    age_unit: 'y',
    info: "Cây Đại Hồi là một loại cây hoa đẹp được sử dụng trong cảnh quan đô thị. Hoa của cây có mùi thơm và có giá trị thẩm mỹ cao.",
    status: "LC",
    source: require('../assets/pants/8.jpg')
  },
  
  {
    id: "9",
    name: "Cây Gạo",
    scientific_name: "Oryza glaberrima",
    origin: "Châu Phi",
    avg_age: "3 - 6",
    age_unit: 'm',
    info: "Cây Gạo là một loại cây lương thực quan trọng ở Châu Phi. Nó cung cấp nguồn thực phẩm chính cho nhiều quốc gia trong khu vực.",
    status: "LC",
    source: require('../assets/pants/9.jpg')
  },
  
  {
    id: "10",
    name: "Cây Gõ Đen",
    scientific_name: "Dalbergia cultrata",
    origin: "Đông Nam Á",
    avg_age: "50 - 100",
    age_unit: 'y',
    info: "Cây Gõ Đen là một loại cây gỗ quý hiếm, được sử dụng trong chế tác đồ gỗ, nhạc cụ và nội thất cao cấp.",
    status: "EN",
    source: require('../assets/pants/10.jpg')
  },

  {
    id: "11",
    name: "Cây Cỏ Mỡ",
    scientific_name: "Portulaca oleracea",
    origin: "Toàn cầu",
    avg_age: "1",
    age_unit: 'y',
    info: "Cây Cỏ Mỡ là một loại cây dược liệu và thực phẩm. Lá cây có chứa nhiều chất dinh dưỡng và có tác dụng giảm cholesterol và huyết áp",
    status: "LC",
    source: require('../assets/pants/11.jpg')
  },

  {
    id: "12",
    name: "Cây Bồ Đề",
    scientific_name: "Nelumbo nucifera",
    origin: "Châu Á",
    avg_age: "100 - 1000",
    age_unit: 'y',
    info: "Cây Bồ Đề là một loài cây hoa nổi tiếng, biểu tượng của nhiều quốc gia. Hoa của cây có hình dáng đẹp và mang ý nghĩa tâm linh sâu sắc.",
    status: "LC",
    source: require('../assets/pants/12.jpg')
  },

  {
    id: "13",
    name: " Cây Sả",
    scientific_name: "Cymbopogon citratus",
    origin: "Châu Á",
    avg_age: "2 - 3",
    age_unit: 'y',
    info: "Cây Sả được sử dụng trong dược liệu và làm gia vị. Lá cây có mùi thơm đặc trưng và có tác dụng chống vi khuẩn và giảm viêm.",
    status: "LC",
    source: require('../assets/pants/13.png')
  },

  {
    id: "14",
    name: "Cây Lan Hài",
    scientific_name: "Phalaenopsis spp.",
    origin: "Châu Á",
    avg_age: "2 - 5",
    age_unit: 'y',
    info: "Cây Lan Hài là một loại cây hoa phổ biến trong cảnh quan đô thị. Hoa của cây có hình dáng đẹp và màu sắc đa dạng.",
    status: "LC",
    source: require('../assets/pants/14.jpg')
  },

  {
    id: "15",
    name: "Cây Đậu Hà Lan",
    scientific_name: "Phaseolus vulgaris",
    origin: "Mỹ, Trung Mỹ",
    avg_age: "2 - 4",
    age_unit: 'm',
    info: "Cây Đậu Hà Lan là một loại cây lương thực quan trọng. Hạt của cây chứa nhiều chất dinh dưỡng và là nguồn thực phẩm phổ biến trên toàn thế giới.",
    status: "LC",
    source: require('../assets/pants/15.jpg')
  },

  {
    id: "16",
    name: "Cây Gõ Trắng",
    scientific_name: "Chionanthus retusus",
    origin: "Trung Quốc",
    avg_age: "50 - 100",
    age_unit: 'y',
    info: "Cây Gõ Trắng là một loại cây gỗ quý hiếm, được sử dụng trong chế tác đồ gỗ, nội thất và công trình kiến trúc.",
    status: "EN",
    source: require('../assets/pants/16.jpg')
  },

  {
    id: "17",
    name: "Cây Bạch Truật",
    scientific_name: "Acorus calamus",
    origin: "Châu  u, Châu Á",
    avg_age: "5 - 10",
    age_unit: 'y',
    info: "Cây Bạch Truật được sử dụng trong dược liệu và làm đẹp. Rễ cây có chứa các chất có tác dụng chống vi khuẩn và giảm viêm.",
    status: "LC",
    source: require('../assets/pants/17.jpg')
  },

  {
    id: "18",
    name: "Cây Đại hoàng",
    scientific_name: "Reynoutria japonica",
    origin: "Châu Á",
    avg_age: "20 - 30",
    age_unit: 'y',
    info: "Cây cảnh quan đô thị, có lá lớn và hoa nhỏ, thích nghi tốt với môi trường đô thị.",
    status: "LC",
    source: require('../assets/pants/18.jpg')
  },
// im slowly losing it
  {
    id: "19",
    name: "Cây Trà",
    scientific_name: "Camellia sinensis",
    origin: "Châu Á",
    avg_age: "30-50",
    age_unit: 'y',
    info: "Cây trà, lá được sử dụng để sản xuất trà", // why is this so short
    status: "LC",
    source: require('../assets/pants/19.png')
  },

  {
    id: "20",
    name: "Cây Sơn Trà",
    scientific_name: "Diospyros lotus",
    origin: "Việt Nam",
    avg_age: "50-100",
    age_unit: 'y',
    info: "Cây cảnh quan đô thị, có quả màu đỏ và được sử dụng trong chế biến thực phẩm.",
    status: "LC",
    source: require('../assets/pants/20.jpg')
  },

  {
    id: "21",
    name: "Cây Lan Hồ Điệp",
    scientific_name: "Phalaenopsis spp.",
    origin: "Châu Á",
    avg_age: "5-10",
    age_unit: 'y',
    info: "Cây hoa, được trồng vì hoa đẹp và thích nghi tốt với môi trường trong nhà.",
    status: "LC",
    source: require('../assets/pants/21.jpg')
  },

  {
    id: "22",
    name: "Cây Cỏ Lúa Mạch",
    scientific_name: "Hordeum vulgare",
    origin: "Châu Á",
    avg_age: "3-4",
    age_unit: 'm',
    info: "Cây lương thực, được sử dụng để sản xuất bia và thức ăn cho gia súc.",
    status: "LC",
    source: require('../assets/pants/22.png')
  },

  {
    id: "23",
    name: "Cây Tràm",
    scientific_name: "Melaleuca cajuputi",
    origin: "Việt Nam",
    avg_age: "30-50",
    age_unit: 'y',
    info: "Cây gỗ, được sử dụng trong ngành công nghiệp gỗ, sản xuất dầu tràm và có tác dụng chống vi khuẩn.",
    status: "LC",
    source: require('../assets/pants/23.jpg')
  },

  {
    id: "24",
    name: "Cây Sâm cau",
    scientific_name: "Curculigo orchioides",
    origin: "Châu Á",
    avg_age: "5-7",
    age_unit: 'y',
    info: "Dược liệu, được sử dụng trong y học truyền thống để tăng cường sinh lực và chữa bệnh.",
    status: "LC",
    source: require('../assets/pants/24.jpg')
  },

  {
    id: "25",
    name: "Cây Lan Vũ Nữ",
    scientific_name: "Cymbidium spp.",
    origin: "Châu Á",
    avg_age: "5-10",
    age_unit: 'y',
    info: "Cây hoa, có nhiều giống và màu sắc khác nhau. Thường được trồng để trang trí vườn hoa và làm cây cảnh trong nhà.",
    status: "LC",
    source: require('../assets/pants/25.jpg')
  },

  {
    id: "26",
    name: "Cây Đậu Phộng",
    scientific_name: "Arachis hypogaea",
    origin: "Nam Mỹ",
    avg_age: "3-5",
    age_unit: 'm',
    info: "Cây lương thực, hạt đậu phộng được sử dụng làm thực phẩm và nguyên liệu trong công nghiệp.",
    status: "LC",
    source: require('../assets/pants/26.jpg')
  },

  {
    id: "27",
    name: "Cây Trắc Thối",
    scientific_name: "Dalbergia tonkinensis Prain",
    origin: "Việt Nam",
    avg_age: "50-100",
    age_unit: 'y',
    info: "Cây gỗ quý, được sử dụng trong nghề mộc và làm đồ thủ công.",
    status: "VU",
    source: require('../assets/pants/27.jpg')
  },

  {
    id: "28",
    name: "Cây Nha Đam",
    scientific_name: "Aloe vera",
    origin: "Châu Phi",
    avg_age: "5-10",
    age_unit: 'y',
    info: "Cây làm đẹp, gel từ lá nha đam được sử dụng trong sản phẩm chăm sóc da và làm thuốc bổ.",
    status: "LC",
    source: require('../assets/pants/28.jpg')
  },

  {
    id: "29",
    name: " Cây Đậu Nành",
    scientific_name: "Glycine max",
    origin: "Đông Á",
    avg_age: "3-5",
    age_unit: 'm',
    info: "Cây lương thực, hạt đậu nành được sử dụng làm thực phẩm và nguyên liệu trong công nghiệp.",
    status: "LC",
    source: require('../assets/pants/29.jpg')
  },

  {
    id: "30",
    name: "Cây Bạch đàn",
    scientific_name: "Santalum album",
    origin: "Ấn Độ, Châu Á",
    avg_age: "30-50",
    age_unit: 'y',
    info: "Cây gỗ quý, được sử dụng trong nghề mộc và sản xuất dầu hương liệu.",
    status: "VU",
    source: require('../assets/pants/30.jpg')
  },

  {
    id: "31",
    name: "Cây Lá Lốt",
    scientific_name: "Piper sarmentosum",
    origin: "Châu Á",
    avg_age: "2-3",
    age_unit: 'y',
    info: "Cây làm đẹp và gia vị, lá lốt được sử dụng trong nhiều món ăn truyền thống.",
    status: "LC",
    source: require('../assets/pants/31.jpg')
  },

  {
    id: "32",
    name: "Cây sao đen",
    scientific_name: "Hopea odorata",
    origin: "Ấn Độ",
    avg_age: "8-10",
    age_unit: 'y',
    info: "Cây Sao Đen ngoài có công dụng hữu ích như làm đẹp cảnh quan, điều hòa và lọc không khí ra thì loại cây này còn có giá trị cao trong kinh tế từ thân, nhựa đến vỏ của cây đều có giá trị",
    status: "LC",
    source: require('../assets/pants/32.png')
  },

  {
    id: "33",
    name: "Cây bằng lăng",
    scientific_name: "Lagerstroemia speciosa",
    origin: "Ấn Độ",
    avg_age: "10 – 20",
    age_unit: 'y',
    info: "Quả, lá của cây bằng lăng luôn là bài thuốc dân gian được sử dụng khá nhiều trong hỗ trợ điều trị tiểu đường và viêm dạ dày.",
    status: "LC",
    source: require('../assets/pants/33.jpg')
  },

  {
    id: "34",
    name: "Cây xà cừ",
    scientific_name: "Khaya senegalensis",
    origin: "Sudan Châu Phi",
    avg_age: "8 - 15",
    age_unit: 'y',
    info: "Gỗ cây xà cừ từ lâu đã nổi tiếng và có giá khá cao. Gỗ xà cừ đỏ, đẹp, chịu lực rất tốt, dễ uốn nắn nên được dùng để làm nhiều vật dụng gỗ, trang trí nội thất",
    status: "LC",
    source: require('../assets/pants/34.jpg')
  },

  {
    id: "35",
    name: " Cây Lim Xẹt",
    scientific_name: "Peltophorum pterocarpum",
    origin: "Australia",
    avg_age: "30",
    age_unit: 'y',
    info: "Lim xẹt là một trong các loài cây chủ lực chiếm cơ cấu cao trong hệ thống cây xanh đô thị",
    status: "NE",
    source: require('../assets/pants/35.jpg')
  },


];


const styles = StyleSheet.create({});
