--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-06-16 21:45:15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 30226)
-- Name: provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinces (
    id character varying(5) NOT NULL,
    code character varying(5),
    name_th character varying(150),
    name_en character varying(150)
);


ALTER TABLE public.provinces OWNER TO postgres;

--
-- TOC entry 3360 (class 0 OID 30226)
-- Dependencies: 211
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('1', '10', 'กรุงเทพมหานคร', 'Bangkok');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('2', '11', 'สมุทรปราการ', 'Samut Prakan');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('3', '12', 'นนทบุรี', 'Nonthaburi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('4', '13', 'ปทุมธานี', 'Pathum Thani');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('5', '14', 'พระนครศรีอยุธยา', 'Phra Nakhon Si Ayutthaya');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('6', '15', 'อ่างทอง', 'Ang Thong');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('7', '16', 'ลพบุรี', 'Loburi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('8', '17', 'สิงห์บุรี', 'Sing Buri');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('9', '18', 'ชัยนาท', 'Chai Nat');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('10', '19', 'สระบุรี', 'Saraburi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('11', '20', 'ชลบุรี', 'Chon Buri');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('12', '21', 'ระยอง', 'Rayong');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('13', '22', 'จันทบุรี', 'Chanthaburi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('14', '23', 'ตราด', 'Trat');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('15', '24', 'ฉะเชิงเทรา', 'Chachoengsao');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('16', '25', 'ปราจีนบุรี', 'Prachin Buri');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('17', '26', 'นครนายก', 'Nakhon Nayok');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('18', '27', 'สระแก้ว', 'Sa Kaeo');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('19', '30', 'นครราชสีมา', 'Nakhon Ratchasima');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('20', '31', 'บุรีรัมย์', 'Buri Ram');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('21', '32', 'สุรินทร์', 'Surin');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('22', '33', 'ศรีสะเกษ', 'Si Sa Ket');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('23', '34', 'อุบลราชธานี', 'Ubon Ratchathani');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('24', '35', 'ยโสธร', 'Yasothon');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('25', '36', 'ชัยภูมิ', 'Chaiyaphum');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('26', '37', 'อำนาจเจริญ', 'Amnat Charoen');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('27', '39', 'หนองบัวลำภู', 'Nong Bua Lam Phu');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('28', '40', 'ขอนแก่น', 'Khon Kaen');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('29', '41', 'อุดรธานี', 'Udon Thani');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('30', '42', 'เลย', 'Loei');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('31', '43', 'หนองคาย', 'Nong Khai');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('32', '44', 'มหาสารคาม', 'Maha Sarakham');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('33', '45', 'ร้อยเอ็ด', 'Roi Et');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('34', '46', 'กาฬสินธุ์', 'Kalasin');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('35', '47', 'สกลนคร', 'Sakon Nakhon');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('36', '48', 'นครพนม', 'Nakhon Phanom');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('37', '49', 'มุกดาหาร', 'Mukdahan');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('38', '50', 'เชียงใหม่', 'Chiang Mai');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('39', '51', 'ลำพูน', 'Lamphun');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('40', '52', 'ลำปาง', 'Lampang');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('41', '53', 'อุตรดิตถ์', 'Uttaradit');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('42', '54', 'แพร่', 'Phrae');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('43', '55', 'น่าน', 'Nan');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('44', '56', 'พะเยา', 'Phayao');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('45', '57', 'เชียงราย', 'Chiang Rai');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('46', '58', 'แม่ฮ่องสอน', 'Mae Hong Son');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('47', '60', 'นครสวรรค์', 'Nakhon Sawan');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('48', '61', 'อุทัยธานี', 'Uthai Thani');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('49', '62', 'กำแพงเพชร', 'Kamphaeng Phet');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('50', '63', 'ตาก', 'Tak');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('51', '64', 'สุโขทัย', 'Sukhothai');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('52', '65', 'พิษณุโลก', 'Phitsanulok');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('53', '66', 'พิจิตร', 'Phichit');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('54', '67', 'เพชรบูรณ์', 'Phetchabun');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('55', '70', 'ราชบุรี', 'Ratchaburi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('56', '71', 'กาญจนบุรี', 'Kanchanaburi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('57', '72', 'สุพรรณบุรี', 'Suphan Buri');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('58', '73', 'นครปฐม', 'Nakhon Pathom');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('59', '74', 'สมุทรสาคร', 'Samut Sakhon');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('60', '75', 'สมุทรสงคราม', 'Samut Songkhram');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('61', '76', 'เพชรบุรี', 'Phetchaburi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('62', '77', 'ประจวบคีรีขันธ์', 'Prachuap Khiri Khan');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('63', '80', 'นครศรีธรรมราช', 'Nakhon Si Thammarat');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('64', '81', 'กระบี่', 'Krabi');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('65', '82', 'พังงา', 'Phangnga');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('66', '83', 'ภูเก็ต', 'Phuket');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('67', '84', 'สุราษฎร์ธานี', 'Surat Thani');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('68', '85', 'ระนอง', 'Ranong');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('69', '86', 'ชุมพร', 'Chumphon');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('70', '90', 'สงขลา', 'Songkhla');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('71', '91', 'สตูล', 'Satun');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('72', '92', 'ตรัง', 'Trang');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('73', '93', 'พัทลุง', 'Phatthalung');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('74', '94', 'ปัตตานี', 'Pattani');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('75', '95', 'ยะลา', 'Yala');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('76', '96', 'นราธิวาส', 'Narathiwat');
INSERT INTO public.provinces (id, code, name_th, name_en) VALUES ('77', '97', 'บึงกาฬ', 'buogkan');


--
-- TOC entry 3220 (class 2606 OID 30230)
-- Name: provinces provinces_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT provinces_pkey PRIMARY KEY (id);


-- Completed on 2022-06-16 21:45:15

--
-- PostgreSQL database dump complete
--

