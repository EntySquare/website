
<style>
.container {
  position: relative;
  width: 100%;
}
.container input {
  width: 100%;
  height: 30px;
  opacity: 0.16;
  border-radius: 24px;
  background: #d8d8d8;
}
.container button {
  width: 25%;
  height: 30px;
  position: absolute;
  right: 0;
  background-color: #4c4c4c;
  border-radius: 24px;
  border: none;
  outline: none;
}
</style>

<template>
  <v-row class="text-center">
    <v-col class="col-12">
      <div
        style="height: 70px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
      >
        公开·公平·透明
      </div>
    </v-col>
    <v-col class="col-12">
      <div align="center" style="height: 100px;">
        <p
          class="text--disabled"
          style="height: 45px;font-size: 17px;width: 900px;"
        >
          INVESTORS的创新团队拥有顶尖金融机构和领先技术公司的背景，为企业、家族基金、个人用户提供投资和融资的专业平台，旨在为新的，创新的，去中心化的金融市场作出贡献。
        </p>
      </div>
    </v-col>
    <v-col class="col-12">
      <div style="height: 50px;"></div>
    </v-col>
    <v-col cols="col-12" style="height: 336px;">
      <v-row style="height: 150px;" class="text-center">
        <v-col cols="4">
          <img src="../assets/diamond.png" style="width:35%;height:auto;" />
          <div>
            <p
              style="color: black; font-family: STHeiti; font-weight: bold; font-size: 20px"
            >
              INVESTORS投资
            </p>
          </div>
          <div style="width: 85%">
            <v-btn text rounded class="transparent" style="float: right">
              <router-link to="/">
                <img
                  src="../assets/arrow_green.png"
                  style="width: 35%;height: auto;"
                />
              </router-link>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <img src="../assets/diamond.png" style="width:35%;height:auto;" />
          <div>
            <p
              style="color: black; font-family: STHeiti; font-weight: bold; font-size: 20px"
            >
              INVESTORS理财
            </p>
          </div>
          <div style="width: 85%">
            <v-btn text rounded class="transparent" style="float: right">
              <router-link to="/">
                <img
                  src="../assets/arrow_green.png"
                  style="width: 35%;height: auto;"
                />
              </router-link>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <img src="../assets/diamond.png" style="width:35%;height:auto;" />
          <div>
            <p
              style="color: black; font-family: STHeiti; font-weight: bold; font-size: 20px"
            >
              企业动态
            </p>
          </div>
          <div style="width: 85%">
            <v-btn text rounded class="transparent" style="float: right">
              <router-link to="/">
                <img
                  src="../assets/arrow_green.png"
                  style="width: 35%;height: auto;"
                />
              </router-link>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="col-12">
      <div style="height: 80px;">&nbsp;</div>
    </v-col>
    <v-col class="col-12">
      <div
        style="height: 80px;font-size: 32px;font-family: STHeiti;font-weight: 400;font-weight: bold;color: #000000;line-height: 43px;"
      >
        合规优势
      </div>
    </v-col>
    <v-col cols="col-12" style="height: 336px;">
      <v-row style="height: 250px;" class="text-left">
        <v-col class="3">
          <div>
            <div align="center">
              <img
                src="../assets/diamond.png"
                style="width: 30%; height: auto; "
              />
            </div>
          </div>
        </v-col>
        <v-col class="7">
          <div>
            <p
              style="color: black; font-family: STHeiti; font-size: 24px; font-weight: bold; align: left"
            >
              专业
            </p>
            <p
              class="text--disabled"
              style="color: black; font-family: STHeiti; font-size: 16px"
            >
              核心团队来自高盛、Facebook、Google、UBS、AIA
            </p>
            <p
              class="text--disabled"
              style="color: black; font-family: STHeiti; font-size: 16px"
            >
              总交易量超过2,500亿美元，月均交易量百亿美元
            </p>
            <p
              class="text--disabled"
              style="color: black; font-family: STHeiti; font-size: 16px"
            >
              为全球知名大型机构、家族基金以及个人用户提供机构级服务
            </p>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="col-12">
      <div
        style="height: 45px;font-size: 32px;font-family: Nunito-Regular, Nunito;font-weight: 400;color: #000000;line-height: 43px;"
      >
        企业动态
      </div>
    </v-col>

    <v-col cols="12">
      <div
        style=" width: 100%;height: 340px;background: linear-gradient(92deg, #00CFAC 0%, #5B7ADE 100%);"
      ></div>
    </v-col>

     <v-col class="mb-12">
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
	
	<v-col class="mb-12">
		 <div style="width: 100%;height: 45px;font-size: 32px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;line-height: 45px;">
			规划路线
		 </div>
	</v-col>
	
	<v-col cols="12" style="height: 336px;">
		<v-row>
		<v-col cols="3"></v-col>
		<v-col cols="6" style="height: 748px;background: ivory;" >
			
		</v-col>		
		<v-col cols="3" ></v-col>
		</v-row>
	</v-col>

 <v-col cols="12" style="height: 137px;background: black;">
</v-col>	 
 <v-col cols="12" style="height: 350px;background: black;">
			
		<v-row>
			<v-col cols="3" style="background: blue;">col-20</v-col>
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
		  <v-col cols="4" style="background: black;">
			  <!-- <div class="container" style="width: 100%; position: relative;">
				  <input type="text" placeholder="   nane@email.com" style="background: #D8D8D8;border-radius: 24px;opacity: 0.16;">
				  <button style="width: 20%;background: #4C4C4C;border-radius: 24px;">注册</button>
			  </div> -->
		<v-row>
		<v-col cols="4" ><img src="../assets/z1.png" style="width:126px;height:68px;"/></v-col>
		</v-row>
		<v-row>
		<v-col cols="5" style ="padding: 0px;width: 221px;font-size: 14px;font-weight: 400;color: #FFFFFF;line-height: 0px;">
			联系方式：services@invest</v-col>
		</v-row>

		<v-row>
			<v-col cols="5" >
				<div class="container" style="padding: 0px;">
				        <input type="text" placeholder="  nane@email.com">
				        <button style="color: #D8D8D8;font-size: 14px;">注册</button>
				</div>
			</v-col>
			<v-col cols="5" style="background: black;" ></v-col>
		</v-row>
		    </v-col>
		</v-row>

  </v-col>

  <v-col cols="12" style="height: 144px;background: black;">

  		<v-row>
  			<v-col cols="3" style="background: black;">col-20</v-col>
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
  		  <v-col cols="4" style="background: black;">
			  <v-row  style="">
			  <v-col cols="3" ><img src="../assets/k1.png" style="width:133px;height:32px;"/></v-col>
			   <v-col cols="1" ></v-col>
			  <v-col cols="3" ><img src="../assets/k2.png" style="width:133px;height:32px;"/></v-col>
			  <v-col cols="2" ></v-col>
			  <v-col cols="3" ></v-col>
			  </v-row>
		  </v-col>
  		</v-row>
  
   </v-col>
 

    </v-row>
 
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
