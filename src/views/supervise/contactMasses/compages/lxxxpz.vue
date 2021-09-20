<template>
  <div class="">
    <div class="pad_20">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="计划名称：">
          <el-input
            v-model="form.name"
            placeholder="限制10字符"
          />
        </el-form-item>
        <el-form-item label="所属层次：">
          <el-input
            v-model="form.name"
            placeholder="限制10字符"
          />
        </el-form-item>
        <el-form-item label="所属层次：">
          <el-input
            v-model="form.name"
            placeholder="限制10字符"
          />
        </el-form-item>
        <div class="pad_20 flex-center">
          <el-button type="primary" size="medium">保存</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
export default {
  name: 'Lxxxpz',
  components: { },
  data() {
    return {
      activeName: 'lxxxpz',
      form: {
        date1: '',
        date2: '',
        keyword: '',
        vipLabel: '',
        isBlack: '',
        userChannel: '',
        timeData: ''
      },
      labelOptions: [
        {
          name: '第十五届',
          value: '1'
        }
      ],
      lyOptions: [
        {
          label: '第三轮',
          value: '1'
        }
      ]
    }
  },
  computed: {},
  created() {},
  methods: {
    onSearch() {},
    fetchData() {},
    handleEdit(row) {
      this.$refs['edit'].showEdit(row)
    },
    handleEdit2(row) {
      this.$refs['edit2'].showEdit(row)
    }
  }
}
</script>
