<style>
<<<<<<< HEAD
.container123 {
  position: relative;
  width: 100%;
}
.container123 input {
  width: 100%;
  height: 30px;
  opacity: 0.16;
  border-radius: 24px;
  background: #d8d8d8;
}
.container123 button {
  width: 25%;
  height: 30px;
  position: absolute;
  right: 0;
  background-color: #4c4c4c;
  border-radius: 24px;
  border: none;
  outline: none;
=======
/*.container {*/
/*  position: relative;*/
/*  width: 100%;*/
/*}*/
/*.container input {*/
/*  width: 100%;*/
/*  height: 30px;*/
/*  opacity: 0.16;*/
/*  border-radius: 24px;*/
/*  background: #d8d8d8;*/
/*}*/
/*.container button {*/
/*  width: 25%;*/
/*  height: 30px;*/
/*  position: absolute;*/
/*  right: 0;*/
/*  background-color: #4c4c4c;*/
/*  border-radius: 24px;*/
/*  border: none;*/
/*  outline: none;*/
/*}*/
.btn {
  font-family: STHeiti;
  font-size: 20px;
  background-color: #ffffff;
  color: #ffffff;
  border: 1px #ffffff solid;
  border-radius: 50px;
  text-align: center;
  padding: 10px 30px;
  outline: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  box-shadow: 0 1px white inset, #cbcbcb 1px 1px, #cecece 2px 2px,
    #d0d0d0 3px 3px, lightgray 4px 4px, #d5d5d5 5px 5px, #d8d8d8 6px 6px;
  cursor: pointer;
}

.bubble_left {
  border: 1px solid #ffffff;
  padding: 10px 40px;
  background: #ffffff;
  width: 80%;
  box-shadow: -1px 0px 10px -10px white, -2px 0px 10px -10px #cbcbcb,
    -3px 0px 10px -10px #cecece, -4px 0px 10px -10px #d0d0d0,
    -5px 0px 10px -10px lightgray, -6px 0px 10px -10px #d5d5d5,
    -7px 0px 10px -10px #d8d8d8, -8px 0px 10px -10px #dadada,
    -9px 0px 10px -10px #ddd, -10px 0px 10px -10px #dfdfdf;
  border-radius: 150px 150px 150px 150px;
  margin-left: 90px;
}

.bubble_right {
  border: 1px solid #ffffff;
  padding: 10px 40px;
  background: #ffffff;
  width: 80%;
  box-shadow: 1px 0px 10px -10px white, 2px 0px 10px -10px #cbcbcb,
    3px 0px 10px -10px #cecece, 4px 0px 10px -10px #d0d0d0,
    5px 0px 10px -10px lightgray, 6px 0px 10px -10px #d5d5d5,
    7px 0px 10px -10px #d8d8d8, 8px 0px 10px -10px #dadada,
    9px 0px 10px -10px #ddd, 10px 0px 10px -10px #dfdfdf;
  border-radius: 150px 150px 150px 150px;
  margin-left: 90px;
>>>>>>> b161bf940433ee902c3a05698a61d77d18742a82
}
</style>

<template>
<<<<<<< HEAD
	<v-container fill-height fluid class="align-start">
  <v-row class="text-center">
    <v-col class="col-12">
      <div
        style="height: 70px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
      >
        公开·公平·透明
      </div>
    </v-col>
	   </v-row>
    <v-col class="col-12">
      <div align="center" style="height: 100px;">
        <p
          class="text--disabled"
          style="height: 45px;font-size: 17px;width: 900px;"
=======
  <v-container fill-height fluid class="align-start">
    <v-row class="text-center">
      <v-col cols="12" style="height: 180px;" />
      <v-col cols="12" style="height: 100px;">
        <div
          style="height: 70px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
>>>>>>> b161bf940433ee902c3a05698a61d77d18742a82
        >
          公开·公平·透明
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center" style="height: 200px">
      <v-col class="col-12">
        <div align="center" style="height: 100px;">
          <p
            class="text--disabled"
            style="height: 45px;font-size: 16px;width: 33%;"
          >
            investors的创新团队拥有顶尖金融机构和领先技术公司的背景，为企业、家族基金、个人用户提供投资和融资的专业平台，旨在为新的，创新的，去中心化的金融市场作出贡献。
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row style="height: 400px;">
      <v-col cols="3"></v-col>
      <v-col cols="2">
        <v-btn
          text
          rounded
          class="btn"
          style="width: 250px;height: 300px; margin-left: 160px"
        >
          <div class="text-center">
            <img
              src="../assets/diamond.png"
              style="width: 120px; height:120px;"
            />
            <p
              style="color: black; font-family: STHeiti; font-weight: bold; font-size: 20px"
            >
              INVESTORS投资
            </p>
            <img
              src="../assets/arrow_green.png"
              style="width:28px; height: 28px; margin-left: 200px"
            />
          </div>
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn
          text
          rounded
          class="btn"
          style="width: 250px;height: 300px; margin-left: 90px"
        >
          <div class="text-center">
            <img
              src="../assets/diamond.png"
              style="width: 120px; height:120px;"
            />
            <p
              style="color: black; font-family: STHeiti; font-weight: bold; font-size: 20px"
            >
              INVESTORS理财
            </p>
            <img
              src="../assets/arrow_green.png"
              style="width:28px; height: 28px; margin-left: 200px"
            />
          </div>
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn text rounded class="btn" style="width: 250px;height: 300px;">
          <div class="text-center">
            <img
              src="../assets/diamond.png"
              style="width: 120px; height:120px;"
            />
            <p
              style="color: black; font-family: STHeiti; font-weight: bold; font-size: 20px"
            >
              企业动态
            </p>
            <img
              src="../assets/arrow_green.png"
              style="width:28px; height: 28px; margin-left: 200px"
            />
          </div>
        </v-btn>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <v-row style="height: 120px" class="text-center">
      <v-col class="col-12" style="height: 180px;">
        <div
          style="height: 80px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
        >
          合规优势
        </div>
      </v-col>
    </v-row>
    <v-row style="height: 400px;">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-row class="bubble_left">
          <v-col cols="5">
            <div>
              <span style="margin-left: 35%;">
                <img
                  src="../assets/diamond.png"
                  style="width: 40%; height: auto;"
                />
              </span>
            </div>
          </v-col>
          <v-col cols="7" class="text-left">
            <div style="margin-left: 40px; margin-top: 15px">
              <p
                style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
              >
                专业
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                核心团队来自高盛、Facebook、Google、UBS、AIA
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                总交易量超过2,500亿美元，月均交易量百亿美元
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                为全球知名大型机构、家族基金以及个人用户提供机构级服务
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>

    <v-row style="height: 400px;" class="text-left">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-row class="bubble_right">
          <v-col cols="7">
            <div style="margin-left: 100px; margin-top: 15px">
              <p
                style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
              >
                合规
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                获得美国及加拿大MSB牌照（Money Service Business）
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                拥有从事数字货币、外汇、期货等金融业务的资质
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                实施严格的KYC认证与反洗钱策略
              </p>
            </div>
          </v-col>
          <v-col cols="5">
            <div>
              <img
                src="../assets/diamond.png"
                style="width: 40%; height: auto; margin-left: 30%; margin-top: 10%"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>

    <v-row style="height: 400px;">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-row class="bubble_left">
          <v-col cols="5">
            <div>
              <span style="margin-left: 35%;">
                <img
                  src="../assets/diamond.png"
                  style="width: 40%; height: auto;"
                />
              </span>
            </div>
          </v-col>
          <v-col cols="7" class="text-left">
            <div style="margin-left: 40px; margin-top: 15px">
              <p
                style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
              >
                安全
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                与加密资产安全托管商Fireblocks、BitGo达成战略合作
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                采用业内领先的MPC技术，保障账户安全
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                25%的公司预算投入在信息安全体系中，远超行业平均水平
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>

    <v-row style="height: 400px;" class="text-left">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-row class="bubble_right">
          <v-col cols="7">
            <div style="margin-left: 100px; margin-top: 15px">
              <p
                style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
              >
                全球化
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                业务覆盖全球，已为全球超80个国家/地区用户提供全年7*24小时服务
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                在全球超过100个电子化交易平台进行交易
              </p>
              <p
                class="text--disabled"
                style="color: black; font-family: STHeiti; font-size: 16px; align: left"
              >
                总部位于韩国首尔，在英国、温哥华、中国设有分支机构
              </p>
            </div>
          </v-col>
          <v-col cols="5">
            <div>
              <img
                src="../assets/diamond.png"
                style="width: 40%; height: auto; margin-left: 30%; margin-top: 10%"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>

    <v-row>
      <v-col class="col-12">
        <div
          style="height: 45px;font-size: 32px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;line-height: 43px;"
        >
          企业动态
        </div>
      </v-col>
    </v-row>
    <v-col cols="12">
      <div
        style=" width: 100%;height: 340px;background: linear-gradient(92deg, #00CFAC 0%, #5B7ADE 100%);"
      ></div>
    </v-col>
<<<<<<< HEAD
    <v-col class="col-12 text-center">
=======

    <v-col class="mb-12">
>>>>>>> b161bf940433ee902c3a05698a61d77d18742a82
      <div
        style="height: 45px;font-size: 32px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;line-height: 43px;"
      >
        投资机构
      </div>
    </v-col>

<<<<<<< HEAD
   <v-col cols="12" >
     <img src="../assets/qydt1.png" style="width:100%;height:100%;"/>
	 <!-- <p style="background-image: url(../assets/qydt1.png);">123123</p> -->


	 <!-- <div style="background-image: url(../assets/qydt1.png);">22222</div> -->
    </v-col>

     <v-col class="mb-12 text-center">
		 <div style="height: 45px;font-size: 32px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;line-height: 43px;">
			投资机构 
		 </div>
	</v-col>
	
	<v-col cols="12" style="height: 336px;">
		<v-row>
		<v-col cols="3"></v-col>
		<v-col cols="6" >
			<v-row style="height: 150px;">
				<v-col cols="3" ><img src="../assets/hezuo_logo1.png" style="width:100%;height:auto;"/></v-col>
				<v-col cols="3" ><img src="../assets/hezuo_logo2.png" style="width:100%;height:auto;"/></v-col>
				<v-col cols="3" ><img src="../assets/hezuo_logo1.png" style="width:100%;height:auto;"/></v-col>
				<v-col cols="3" ><img src="../assets/hezuo_logo2.png" style="width:100%;height:auto;"/></v-col>
			</v-row>
			<v-row  style="height: 30px;"></v-row>
			<v-row  style="height: 150px;">
				<v-col cols="3" ><img src="../assets/hezuo_logo2.png" style="width:100%;height:auto;"/></v-col>
				<v-col cols="3" ><img src="../assets/hezuo_logo1.png" style="width:100%;height:auto;"/></v-col>
				<v-col cols="3" ><img src="../assets/hezuo_logo2.png" style="width:100%;height:auto;"/></v-col>
				<v-col cols="3" ><img src="../assets/hezuo_logo1.png" style="width:100%;height:auto;"/></v-col>
			</v-row>
		</v-col>		
		<v-col cols="3" ></v-col>
		</v-row>
	</v-col>
	 <v-col cols="12" style="height: 120px;">
		 </v-col>
	<v-col class="mb-12 text-center" >
		 <div style="width: 100%;height: 45px;font-size: 32px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;line-height: 45px;">
			规划路线
		 </div>
	</v-col>
	
	<v-row>
		<v-col cols="3"></v-col>
		
	<v-col cols="6">
		<v-row>
		<v-col cols="4" >
				<button type="button" style="line-height:80px; background: linear-gradient(270deg, #00FFBC 0%, #5B7ADE 100%); height: 6px; width:100%;font-size: 32px;outline: none;">2019</button>
		</v-col>
		<v-col cols="4">
				<button type="button" style="line-height:80px; background: #F7F8FB; height: 6px;font-size: 32px; width:100%;outline: none;">2020</button>
		</v-col>
		<v-col cols="4" >
					<button type="button" style="line-height:80px; background: #F7F8FB; height: 6px;font-size: 32px; width:100%;outline: none;">2021</button>
		</v-col>
		</v-row>
	</v-col>
	</v-row>
	
	
	
	 <v-col cols="12" style="height: 50px;">
	</v-col>
	<v-col cols="12">
		<v-row>
		<v-col cols="3"></v-col>
		<v-col cols="6" style="background: #FFFFFF;box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);border-radius: 24px;" >
			<div id="i1" style="padding: 40px 40px 40px 40px">
			<p align="left" style="font-size: 24px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;">
				2019
			</p>
			<p align="left" style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;">
					第二季度~第三季度
			</p>
			<p align="left" style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;">
			<span style="color: #00FFBC ;font-size: 5px;">●</span>
			investors Established
			</p>
			<p align="left" style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;">
				<span style="color: #00FFBC ;font-size: 5px;">●</span>
				investors Architecture and Consensus Design
			</p>
			<p align="left" style="font-size: 18px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #000000;">
					第四季度
			</p>
			<p align="left" style="font-size: 16px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #808080;">
				<span style="color: #00FFBC ;font-size: 5px;">●</span>
				investors Exchange system Beta Launch
			</p>
			</div>
		</v-col>		
		<v-col cols="3" ></v-col>
		</v-row>
	</v-col>
 <v-col cols="12" style="height: 100px;">
</v-col>	


 <v-row  style="height: 100px;background: black;">
	 
</v-row>	 
 <v-row style="height: 250px;background: black;">
			
		<v-row>
			<v-col cols="3" style="background: black;"></v-col>
		  <v-col cols="5" style="background: black;">
			  <table>
			    <tr>
				  <th align="left" valign="top" style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;">
					  公司
					  </th>
			      <th align="left" valign="top" style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;">
					  产品</th>
				  <th align="left" valign="top" style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;">
					  帮助</th>
			    </tr>
				<tr>			      
				<td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					关于我们</td>
			      <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  APP 钱包</td>
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  帮助中心</td>
			    </tr>
				<tr>				  
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  安全与合规</td>
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  HSF代币</td>
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  建议与反馈</td>
				</tr>
				<tr>
				 <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					 联系我们</td>
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  理财</td>
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  提交工单</td>
				</tr>
				<tr>
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  白皮书</td>
				  <td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
					  社区</td>
				  <td></td>
				</tr>
				<tr>
			<td align="left" valign="top" style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;">
				企业动态</td>
				  <td></td>
				  <td></td>
				</tr>
			  </table>
			  
		  </v-col>
		  <v-col cols="4">
			
		<v-row>
		<v-col cols="6" ><img src="../assets/z1.png" style="width:126px;height:68px;float:left;"/></v-col>
		</v-row>
		<v-row>
		<v-col cols="6" style ="padding: 15px 15px 15px 15px;width: 221px;font-size: 14px;font-weight: 400;color: #FFFFFF;line-height: 0px;text-align: left;">
			联系方式：services@investors.com</v-col>
		</v-row>

		<v-row>
			<v-col cols="5" >
				<div class="container123" style="padding: 0px;">
				        <input type="text" placeholder="  nane@email.com">
				        <button style="color: #D8D8D8;font-size: 14px;">注册</button>
				</div>
			</v-col>
			<v-col cols="5" style="background: black;" ></v-col>
		</v-row>
		    </v-col>
		</v-row>

  </v-row>


  		<v-row style="height: 120px;background: black;">
  			<v-col cols="3" style="background: black;"></v-col>
			<v-col cols="5" style="background: black;">
					<v-row  style="height: 32px;">
									<v-col cols="1" ><img src="../assets/v1.png" style="width:32px;height:32px;"/></v-col>
									<v-col cols="1" ><img src="../assets/v2.png" style="width:32px;height:32px;"/></v-col>
									<v-col cols="1" ><img src="../assets/v3.png" style="width:32px;height:32px;"/></v-col>
									<v-col cols="1" ><img src="../assets/v4.png" style="width:32px;height:32px;"/></v-col>
									<v-col cols="1" ><img src="../assets/v5.png" style="width:32px;height:32px;"/></v-col>
									<v-col cols="1" ></v-col>
									<v-col cols="1" ></v-col>

									<v-col cols="2" style ="width: 24px;height: 32px;font-size: 12px;text-align:center;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 31px;">
										<img src="../assets/c1.png" style="width:10px;height:10px;"/>
										韩国
									</v-col>
									<v-col cols="1" ></v-col>
									<v-col cols="1" ></v-col>
									<v-col cols="1" ></v-col>
					</v-row>
  		  </v-col>
  		  <v-col cols="4" >
			  <v-row >
			  <v-col cols="2" ><img src="../assets/k1.png" style="width:133px;height:32px;float:left;"/></v-col>
			   <v-col cols="1" ></v-col>
			  <v-col cols="2" ><img src="../assets/k2.png" style="width:133px;height:32px;float:left;"/></v-col>
			  <v-col cols="2" ></v-col>
			  <v-col cols="3" ></v-col>
			  </v-row>
		  </v-col>
  		</v-row>
  
 
 <v-row style="background: black;">
		<v-col cols="3" style="background: black;">
		 </v-col>
		  <v-col cols="5" style="background: black;text-align: left;color: #808080;font-size: 12px;">
			 © 2021 Investors All rights reserved
		  </v-col>
		 <v-col cols="4" style="background: black;text-align: left;color: #808080;font-size: 12px;">
				   服务协议  ｜  隐私条款  ｜  免责声明
		  </v-col>
 </v-row>

 
	
=======
    <v-col cols="12" style="height: 336px;">
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <v-row style="height: 150px;">
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo1.png"
                style="width:100%;height:auto;"
            /></v-col>
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo2.png"
                style="width:100%;height:auto;"
            /></v-col>
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo1.png"
                style="width:100%;height:auto;"
            /></v-col>
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo2.png"
                style="width:100%;height:auto;"
            /></v-col>
          </v-row>
          <v-row style="height: 150px;">
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo2.png"
                style="width:100%;height:auto;"
            /></v-col>
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo1.png"
                style="width:100%;height:auto;"
            /></v-col>
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo2.png"
                style="width:100%;height:auto;"
            /></v-col>
            <v-col cols="3"
              ><img
                src="../assets/hezuo_logo1.png"
                style="width:100%;height:auto;"
            /></v-col>
          </v-row>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-col>

    <v-col class="mb-12">
      <div
        style="width: 100%;height: 45px;font-size: 32px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;line-height: 45px;"
      >
        规划路线
      </div>
    </v-col>

    <v-col cols="12" style="height: 336px;">
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6" style="height: 748px;background: ivory;"> </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-col>

    <v-col cols="12" style="height: 137px;background: black;"> </v-col>
    <v-col cols="12" style="height: 350px;background: black;">
      <v-row>
        <v-col cols="3" style="background: blue;">col-20</v-col>
        <v-col cols="5" style="background: black;">
          <table>
            <tr>
              <th
                align="left"
                valign="top"
                style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
              >
                公司
              </th>
              <th
                align="left"
                valign="top"
                style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
              >
                产品
              </th>
              <th
                align="left"
                valign="top"
                style="width: 178px;height: 45px;font-size: 18px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;line-height: 16px;"
              >
                帮助
              </th>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                关于我们
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                APP 钱包
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                帮助中心
              </td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                安全与合规
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                HSF代币
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                建议与反馈
              </td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                联系我们
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                理财
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                提交工单
              </td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                白皮书
              </td>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                社区
              </td>
              <td></td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style="width: 158px;height: 35px;font-size: 14px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 14px;"
              >
                企业动态
              </td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </v-col>
        <v-col cols="4" style="background: black;">
          <!-- <div class="container" style="width: 100%; position: relative;">
				  <input type="text" placeholder="   nane@email.com" style="background: #D8D8D8;border-radius: 24px;opacity: 0.16;">
				  <button style="width: 20%;background: #4C4C4C;border-radius: 24px;">注册</button>
			  </div> -->
          <v-row>
            <v-col cols="4"
              ><img src="../assets/z1.png" style="width:126px;height:68px;"
            /></v-col>
          </v-row>
          <v-row>
            <v-col
              cols="5"
              style="padding: 0px;width: 221px;font-size: 14px;font-weight: 400;color: #FFFFFF;line-height: 0px;"
            >
              联系方式：services@invest</v-col
            >
          </v-row>

          <v-row>
            <v-col cols="5">
              <div class="container" style="padding: 0px;">
                <input type="text" placeholder="  nane@email.com" />
                <button style="color: #D8D8D8;font-size: 14px;">注册</button>
              </div>
            </v-col>
            <v-col cols="5" style="background: black;"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" style="height: 144px;background: black;">
      <v-row>
        <v-col cols="3" style="background: black;">col-20</v-col>
        <v-col cols="5" style="background: black;">
          <v-row style="height: 32px;">
            <v-col cols="1"
              ><img src="../assets/v1.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v2.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v3.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v4.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"
              ><img src="../assets/v5.png" style="width:32px;height:32px;"
            /></v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1"></v-col>

            <v-col
              cols="2"
              style="width: 24px;height: 32px;font-size: 12px;text-align:center;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #FFFFFF;line-height: 31px;"
            >
              <img src="../assets/c1.png" style="width:10px;height:10px;" />
              韩国
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </v-col>
        <v-col cols="4" style="background: black;">
          <v-row style="">
            <v-col cols="3"
              ><img src="../assets/k1.png" style="width:133px;height:32px;"
            /></v-col>
            <v-col cols="1"></v-col>
            <v-col cols="3"
              ><img src="../assets/k2.png" style="width:133px;height:32px;"
            /></v-col>
            <v-col cols="2"></v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
>>>>>>> b161bf940433ee902c3a05698a61d77d18742a82

 </v-container>
</template>
<!-- <script src="https://unpkg.com/element-ui/lib/index.js"></script> -->
<!-- <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"> -->
<script>
export default {
  name: 'HelloWorld',
}


</script>
