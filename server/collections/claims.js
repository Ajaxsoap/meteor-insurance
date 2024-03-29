Claims.allow({
	insert: function (userId, doc) {
		return Claims.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Claims.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Claims.userCanRemove(userId, doc);
	}
});

Claims.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

Claims.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Claims.before.remove(function(userId, doc) {
	
});

Claims.after.insert(function(userId, doc) {
	
});

Claims.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Claims.after.remove(function(userId, doc) {
	
});
