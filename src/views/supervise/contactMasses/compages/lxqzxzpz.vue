<template>
  <div class="">
    <div class="pad_20">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="内容标题：">
          <el-input
            v-model="form.name"
            placeholder="请输入内容（限制50字符）"
          />
        </el-form-item>
        <el-form-item label="内容简述：">
          <el-input
            v-model="form.desc"
            type="textarea"
            :rows="6"
            placeholder="请输入内容（限制50字符）"
          />
        </el-form-item>
        <el-form-item label="内容详情：">
          <el-input
            v-model="form.desc"
            type="textarea"
            :rows="6"
            placeholder="请输入内容（限制50字符）"
          />
        </el-form-item>
        <div class="pad_20 flex-center">
          <el-button type="primary" size="medium">确认保存</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/styles/llcss.css' // liuli css
export default {
  name: 'Lxqzxzpz',
  components: {},
  data() {
    return {
      activeName: 'lxqzxzpz',
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
