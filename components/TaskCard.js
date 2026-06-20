const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCompleted: {
    backgroundColor: '#e6f4ea', // Fondo verde claro para tareas completadas
    borderColor: '#34a853',
    borderWidth: 1,
  },
  contentContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202124',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#5f6368',
  },
  description: {
    fontSize: 14,
    color: '#5f6368',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  actionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  btnComplete: {
    backgroundColor: '#1a73e8',
  },
  btnDelete: {
    backgroundColor: '#ea4335',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});