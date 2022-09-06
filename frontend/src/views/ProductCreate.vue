<template>
  <div class="product-create">
    <div class="container">
      <div class="title">제품 등록</div>
      <div class="item-info">
        <div class="item-info-contents">
          <div class="item-title">제품명</div>
          <input type="text" class="form-control">
        </div>
        <div class="item-info-contents">
          <div class="item-title">제품가격</div>
          <input type="number" class="form-control">
          <div class="won">원</div>
        </div>
        <div class="item-info-contents">
          <div class="item-title">배송비</div>
          <input type="number" class="form-control">
          <div class="won">원</div>
        </div>
        <div class="item-info-contents">
          <div class="item-title">추가배송비(도서산간)</div>
          <input type="number" class="form-control">
          <div class="won">원</div>
        </div>
        <div class="item-info-contents">
          <div class="item-title">제품카테고리</div>
          <div class="select-box-group">
            <div class="form-select">
              <select class="form-select-item" v-model="cate1" @change="changeCategory1">
                <option :value="cate" :key=i v-for="(cate,i) in category1">{{cate}}</option>
              </select>
            </div>
            <div class="form-select">
              <select class="form-select-item" v-model="cate2" @change="changeCategory2">
                <option :value="cate" :key=i v-for="(cate,i) in category2">{{cate}}</option>
              </select>
            </div>
            <div class="form-select">
              <select class="form-select-item" v-model="cate3" @change="changeCategory3">
                <option :value="cate" :key=i v-for="(cate,i) in category3">{{cate}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="item-info-contents">
          <div class="item-title">태그</div>
          <input type="number" class="form-control">
        </div>
        <div class="item-info-contents">
          <div class="item-title">출고일</div>
          <input type="number" class="form-control">
          <div class="won">일 이내 출고</div>
        </div>
        <div class="item-info-contents">
          <div class="item-title">썸네일이미지</div>
          <div class="input-contents">
            <input type="file" class="form-control" accept="image/png,image/jpeg">
            <div class="file-info" role="alert">
              <ul>
                <li>이미지 사이즈 : 350*350</li>
                <li>파일 사이즈 : 1M 이하</li>
                <li>파일 확장자 : png, jpg만 가능</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="item-info-contents">
          <div class="item-title">제품이미지</div>
          <div class="input-contents">
            <input type="file" class="form-control" accept="image/png,image/jpeg" multiple>
            <div class="file-info" role="alert">
              <ul>
                <li>최대 5개까지 가능</li>
                <li>이미지 사이즈 : 700*700</li>
                <li>파일 사이즈 : 1M 이하</li>
                <li>파일 확장자 : png, jpg만 가능</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="item-info-contents">
          <div class="item-title">제품설명이미지</div>
          <div class="input-contents">
            <input type="file" class="form-control" accept="image/png,image/jpeg">
            <div class="file-info" role="alert">
              <ul>
                <li>파일 사이즈 : 5M 이하</li>
                <li>파일 확장자 : png, jpg만 가능</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="adjust-btn">
          <div class="cancel-btn">취소하기</div>
          <div class="lower-btn">저장하기</div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="less">
.product-create {
  .container {
    .title {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }
    .item-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 50px;
      margin-right: 50px;
      &-contents {
        display: flex;
        margin-bottom: 20px;
        .item-title {
          font-size: 15px;
        }
        .form-control {
          margin-left: auto;
          width: 300px;
          height: 40px;
        }
        .select-box-group {
          display: flex;
          margin-left: 50px;
          .form-select {
            margin-left: 50px;
          }
        }
        .input-contents {
          margin-left: auto;
        }
      }
      .adjust-btn {
        display: flex;
        justify-content: space-between;
        .cancel-btn {
          width: 48%;
          height: 48px;
          background: #18C050;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 15px;
          color: #fff;
          cursor: pointer;
          @media screen and(max-width: 768px) {
            font-size: 15px;
            height: 42px;
          }
        }
        .lower-btn {
          width: 48%;
          height: 48px;
          background: #003300;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 15px;
          color: #fff;
          margin-left: auto;
          cursor: pointer;
          @media screen and(max-width: 768px) {
            font-size: 15px;
            height: 42px;
          }
        }
      }
    }
  }
}
</style>
