window.onload=function(){
	//组件用法
	Vue.component('todo-item',{
		template: '\
		    <li>\
		      {{ title }}\
		      <button v-on:click="$emit(\'remove\')">X</button>\
		      <input class="checkbox" type="checkbox">\
		    </li>\
		  	',
		// data:function(){
		// 	return{
		// 		todos:0
		// 	}
		// },
		// methods:{
		// 	Checkbox:function(){
		// 		this.todos += 1;
		// 		this.$emit('Checkbox');
		// 	}
		// },
	  props: ['title']
	})
	new Vue({
		el:'#todo-list-example',
		data:{
			newTodoText:'',
			todos:[],
		},
		computed:{
			Number:function(){
				return this.todos.length;
			},
		},
		methods:{
			addNewTodo:function(){
				this.todos.push(this.newTodoText)
				this.newTodoText = ''
			},
		}
	})
}