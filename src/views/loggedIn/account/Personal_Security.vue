<template>
  <div>
    <div class="button-group">
      <b-button type="">Sign Out</b-button>
      <b-button type="is-dark">Change Account Password</b-button>
    </div>
    <div class="detail-block">
      <div class="title">Two Factor Authentication</div>
      <div class="content">
        <b-button class="backup-codes" type="is-small">Get Backup Codes</b-button>
        <div class="field-label">Active:</div>
        <b-switch :value="user.twoKeyActive" type="is-success"/>
      </div>
      <div class="content">Method: Mobile Phone</div>
      <div class="content">Contact Number: {{ user.phone }}</div>
      <div>
        <b-button>Get Backup Codes</b-button>
      </div>
    </div>
    <div class="detail-block">
      <div class="title">Access Log</div>
      <div class="content">19 May 2020 19:45 from iPhone</div>
      <div class="content">22 May 2020 08:36 from Windows</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'personal_security',
  components: {
  },
  data: function(){
    return {
      user: {
        firstname: 'Benjamin',
        surname: 'Broad',
        email: 'me@benbroad.com',
        twoKeyActive: true,
        phone: '(+61)431 927 623'
      }
    }
  },
};

</script>

<style lang="scss" scoped>

  .button-group {position: absolute;
                top: 10px;
                right: 0px;}

  .detail-block {
    border: 1px solid #f6f6f6;
    border-radius: 0.3rem;
    padding: 5px;
    font-size: 0.8rem;
    color: #7e7e7e;
    margin-bottom: 10px;
    position: relative;

    .backup-codes {position: absolute;
                  top: 5px;
                  right: 5px;}

    .title {font-size: 0.9rem;
            color: #7e7e7e;
            margin-bottom: 10px;}

    .content {font-size: 0.8rem;
            color: #7e7e7e;
            margin-bottom: 5px;

            .field-label {
              font-weight: 600;
              display: inline-block;
              vertical-align: top;
            }

          }
  }
</style>
